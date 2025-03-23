import {
  CircleDollarSign,
  CircleHelp,
  Clipboard,
  CheckCircle,
  Key,
  Shield,
  Mail,
  AlertCircle,
} from "lucide-react";

export const steps = [
  {
    icon: <CircleDollarSign className="w-6 h-6 text-blue-400" />,
    title: "Purchase an Invite Code",
    description: "Get started by acquiring an invite code from our store.",
    details: [
      "Visit our store at e-zhost.mysellix.io",
      "Purchase a $3 invite code",
      "We accept PayPal, card and crypto",
      "Codes are delivered swiftly to your email",
    ],
    image: "/assets/registration/store.png",
  },
  {
    icon: <CircleHelp className="w-6 h-6 text-blue-400" />,
    title: "Link Discord Account",
    description:
      "Connect your Discord account for community access and support.",
    details: [
      "This step is necessary to use the service",
      "You are automatically added to our server",
      "Please read the rules carefully",
      "Check our announcement channels",
    ],
    image: "/assets/registration/discord.png",
  },
  {
    icon: <Clipboard className="w-6 h-6 text-blue-400" />,
    title: "Review Terms of Service",
    description: "Carefully read and accept our terms of service.",
    details: [
      "No sharing or reselling of accounts",
      "Respect upload guidelines we have set",
      "You will be blacklisted if you don't",
      "No crime >:c",
    ],
    image: "/assets/registration/tos.png",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-blue-400" />,
    title: "Complete Registration",
    description: "Set up your account with secure credentials.",
    details: [
      "Choose a unique username",
      "Set a strong password",
      "Add a VALID email",
      "Enter your invite code",
    ],
    image: "/assets/registration/register.png",
  },
];

export const securityTips = [
  {
    icon: <Key className="w-5 h-5 text-blue-400" />,
    title: "Strong Password",
    tip: "Use a combination of letters, numbers, and symbols.",
  },
  {
    icon: <Shield className="w-5 h-5 text-blue-400" />,
    title: "Two-Factor Authentication",
    tip: "Enable 2FA through a dedicated authenticator app.",
  },
  {
    icon: <Mail className="w-5 h-5 text-blue-400" />,
    title: "Recovery Email",
    tip: "Add a valid email address to recover your account if needed.",
  },
  {
    icon: <AlertCircle className="w-5 h-5 text-blue-400" />,
    title: "Account Privacy",
    tip: "Never share your account credentials and code.",
  },
];

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};
