'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'

interface TypewriterProps {
  options: {
    strings: string[]
    autoStart: boolean
    loop: boolean
    delay: number
    deleteSpeed: number
  }
}

export default function Typewriter({ options }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isVisible, setIsVisible] = useState(options.autoStart)
  const containerRef = useRef<HTMLSpanElement>(null)
  const { strings, loop, delay, deleteSpeed } = options

  const stringIndexRef = useRef(0)
  const charIndexRef = useRef(0)
  const isDeletingRef = useRef(false)
  const animationFrameRef = useRef<number | null>(null)

  const animate = useCallback(() => {
    const currentString = strings[stringIndexRef.current]

    if (isDeletingRef.current) {
      if (charIndexRef.current > 0) {
        charIndexRef.current--
        setDisplayedText(currentString.substring(0, charIndexRef.current))
        scheduleNextFrame(deleteSpeed * 50)
      } else {
        isDeletingRef.current = false
        if (loop || stringIndexRef.current < strings.length - 1) {
          stringIndexRef.current = (stringIndexRef.current + 1) % strings.length
          scheduleNextFrame(500)
        }
      }
    } else {
      if (charIndexRef.current < currentString.length) {
        charIndexRef.current++
        setDisplayedText(currentString.substring(0, charIndexRef.current))
        scheduleNextFrame(delay * 2)
      } else if (loop || stringIndexRef.current < strings.length - 1) {
        isDeletingRef.current = true
        scheduleNextFrame(delay * 4 + 1000)
      }
    }
  }, [strings, loop, delay, deleteSpeed])

  const scheduleNextFrame = useCallback((waitTime: number) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
    animationFrameRef.current = requestAnimationFrame(() => {
      setTimeout(animate, waitTime)
    })
  }, [animate])

  useEffect(() => {
    if (!isVisible) return

    scheduleNextFrame(delay * 2)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isVisible, delay, scheduleNextFrame])

  useEffect(() => {
    if (options.autoStart) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [options.autoStart])

  return (
    <span ref={containerRef} className="inline-block min-w-[1ch]">
      {displayedText}
      <span className="animate-blink">|</span>
    </span>
  )
}