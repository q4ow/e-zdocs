export interface FAQ {
  id: string;
  question: string;
  shortAnswer: string;
  category: string;
  sections: {
    title: string;
    content: string;
    type?: "text" | "bullets" | "steps" | "code" | "warning" | "note";
  }[];
  images?: {
    url: string;
    alt: string;
    caption?: string;
  }[];
  relatedQuestions?: string[];
  additionalNotes?: string[];
  lastUpdated?: string;
}

export const faqs: FAQ[] = [
  {
    id: "features",
    question: "But what do I get?",
    shortAnswer:
      "E-Z Host and E-Z Bio offer a range of features for standard users, including file hosting and customizable bio pages.",
    category: "Services",
    sections: [
      {
        title: "E-Z Host Features",
        type: "bullets",
        content: `
Fast and reliable file hosting
Support for image, video, audio and application MIME types
Customizable upload settings
Shareable direct links
RESTful API for uploads, pastes and link shortening
& Much, much more`,
      },
      {
        title: "E-Z Bio Features",
        type: "bullets",
        content: `
Infinitely customizable bio page
Multiple layout options
Social media links integration
Mobile-friendly design
Play your favourite music on your bio`,
      },
    ],
    images: [
      {
        url: "/assets/faq/bio-example.png",
        alt: "Example bio page",
        caption: "My personal bio page - e-z.bio/keiran",
      },
    ],
    relatedQuestions: ["premium-features", "account-creation"],
    additionalNotes: [
      "Features may be subject to change",
      "Some features might have usage restrictions for standard users",
      "A premium upgrade is available for purchase",
    ],
    lastUpdated: "2024-12-01",
  },

  {
    id: "account-creation",
    question: "How do I create an E-Z account?",
    shortAnswer:
      "Creating an account is fairly easy, all you need is an invite code, a discord account and a valid email address.",
    category: "Account Management",
    sections: [
      {
        title: "Requirements",
        type: "bullets",
        content: `
A valid invite code, either from an existing member or by purchasing one
A Discord account
A valid email address
A secure password (can be reset by our support team on discord)`,
      },
      {
        title: "Registration Steps",
        type: "steps",
        content: `
1. Visit e-z.gg
2. Click the "Register" button in the top right corner
3. Enter your username
4. Choose a secure password
5. Enter your email address
6. Enter your invite code which you should receive by email
7. Accept our Terms of Service
8. Click "Register"
`,
      },
      {
        title: "After Registration",
        type: "text",
        content:
          "Once completed, you'll have full access to all E-Z services and features. Make sure to join our Discord server to stay updated with the latest news and updates.",
      },
      {
        title: "Important Security Notes",
        type: "warning",
        content: `
- Never share your account credentials
- Enable 2FA for additional security
- Use a unique password not used on other services
- Keep your invite code private until registered`,
      },
    ],
    images: [
      {
        url: "/assets/faq/signup-page.png",
        alt: "E-Z signup page",
        caption: "The E-Z signup page with registration form",
      },
    ],
    relatedQuestions: ["password-reset", "account-verification"],
    additionalNotes: [
      "Account creation is subject to our Terms of Service",
      "Multiple accounts per user are now allowed",
      "Ensure you read our rules (in the discord) and our TOS carefully before registering",
      "Invite codes are single use and should be used responsibly",
    ],
    lastUpdated: "2024-12-01",
  },
  {
    id: "password-reset",
    question: "How do I reset my password?",
    shortAnswer:
      "Open a ticket in our Discord server and request a password reset, ensuring you have access to the email linked to your account.",
    category: "Account Management",
    sections: [
      {
        title: "Reset Process",
        type: "steps",
        content: `
1. Visit our discord server - which you should already be in
2. Open the 'support' channel
3. Click the 'Open Ticket' button
4. In the form, inform them of your issue
5. If you have a valid email address linked to your account, you will be asked to open an email
6. Once verified, you will be able to change your password
        `,
      },
      {
        title: "Important Information",
        type: "warning",
        content: `
Check your spam folder if you don't receive the email
Make sure to use a strong, unique password
Previous sessions will be logged out`,
      },
      //       {
      //         title: "Password Requirements",
      //         type: "bullets",
      //         content: `
      // - Minimum 5 characters
      // `
      //       }
    ],
    images: [
      {
        url: "/assets/faq/support-ticket.png",
        alt: "Support ticket form",
        caption: "The support ticket form",
      },
    ],
    relatedQuestions: ["account-creation", "account-security"],
    additionalNotes: [
      "You absolutely need a valid email address to reset your password",
      "The only way to reset your password is through a support ticket",
      "Consider enabling 2FA after resetting your password",
      "Please don't spam the chat in our Discord while waiting for a staff response",
      "You should probably try using a password manager like Proton Pass (my personal choice)",
    ],
    lastUpdated: "2024-12-06",
  },
  {
    id: "placeholders",
    question: "How do I make the file info show on my embeds?",
    shortAnswer:
      "E-Z Host supports various dynamic placeholders that expand when your file is uploaded, such as {filename}, {size}, and {date}.",
    category: "Embeds",
    sections: [
      {
        title: "Available Placeholders",
        type: "bullets",
        content: `
  {size} - shows the file size in appropriate units
  {username} - your username on the site - NOT your bio handle
  {filename} - expands to the name of the uploaded file
  {uploads} - your total uploads to E-Z.host
  {domain} - the domain you are currently using (e.g. arch-linux.fun)
  {date} - the date of the upload - DD/MM/YYYY
  {time} - the time of the upload - HH.mm.SS
  {timestamp} - combines {date} and {time} - DD/MM/YYYY, HH.mm.SS
  {fakeurl} - the fake URL you have configured in your host settings
  {customfilepath} - the custom file path you have configured in your host settings
  `,
      },
      {
        title: "Usage Example",
        type: "code",
        content: `
File: {filename}
Uploaded on {date} at {time}
Size: {size}
Uploads: {uploads}
Storage used: {storage}
    `,
      },
      {
        title: "Important Notes",
        type: "warning",
        content:
          "Placeholders are case-sensitive and must be enclosed in curly braces. Invalid placeholders will not be replaced at all.",
      },
    ],
    relatedQuestions: [],
    additionalNotes: [
      "Placeholders can be used in all embed fields",
      "Some placeholders may be blank if you have not configured them in your settings",
      "Both standard and premium users have access to all embeds",
    ],
    lastUpdated: "2024-12-01",
  },

  {
    id: "premium-features",
    question: "What are the premium features?",
    shortAnswer:
      "E-Z Host and E-Z Bio offer a range of enhancements for premium users for a price that seems too good to be true!",
    category: "Services",
    sections: [
      {
        title: "Premium Features",
        type: "bullets",
        content: `
Extra upload limit per upload (From 25mb to 100mb)
A secondary alias for your bio page
Ability to use special unicode characters and emojis in url
1 extra invite per invite wave (2 total)
Donator role in the discord server
Donator badge on e-z.bio
More coming soon!`,
      },
    ],
    relatedQuestions: ["features", "account-creation"],
    additionalNotes: [
      "Features may be subject to change",
      "A standard invite must be purchased before you can upgrade",
      "Standard users can access all aspects of our services, premium just provides more enhancements",
    ],
    lastUpdated: "2024-12-08",
  },
  {
    id: "public-domains",
    question: "Can I use more domains?",
    shortAnswer:
      "E-Z Host and E-Z Bio provide a range of public domains for you to use, free of charge. You can use them to share your files, shortened URLs, personal bio, or even donate your own domain!",
    category: "Services",
    sections: [
      {
        title: "Wait, what?",
        type: "bullets",
        content: `
  Share your links with funny domains
  Donate your own domain to use it with our service
  Get free premium for donating a public domain
  And more!`,
      },
    ],
    relatedQuestions: ["features", "premium-features"],
    additionalNotes: [
      "Public domains are subject to expiration",
      "You can use any public domain for free, but they can also be donated privately",
      "Private domains will be for personal use, and public ones will be available for everyone to use",
      "See the full list of available public domains, or donate your own, on the dashboard",
    ],
    lastUpdated: "2024-12-09",
  },
  {
    id: "authentication",
    question: "How does authentication work on E-Z?",
    shortAnswer:
      "E-Z uses a token-based authentication system with refresh tokens stored in cookies and access tokens in memory.",
    category: "Account Management",
    sections: [
      {
        title: "Authentication Flow",
        type: "steps",
        content: `
  1. You log into your account
  2. A refresh token is stored in your browser cookies
  3. An access token is stored in the application's memory
  4. Access token refreshes every 15 minutes using the /auth/token endpoint
  5. Each refresh provides both a new access token and refresh token`,
      },
      {
        title: "Token Expiration without 'Remember Me'",
        type: "bullets",
        content: `
  Refresh token cleared when browser closes
  Session ends immediately`,
      },
      {
        title: "Token Expiration with 'Remember Me'",
        type: "bullets",
        content: `
  Refresh token persists for 7 days
  Token deleted after 7 days of inactivity
  Each site visit resets the 7-day timer`,
      },
      {
        title: "Security Notes",
        type: "warning",
        content: `
  Never share your tokens with anyone
  Use "Remember Me" only on trusted devices
  Log out properly to clear all tokens
  Enable 2FA for additional security`,
      },
    ],
    relatedQuestions: ["account-security", "password-reset"],
    additionalNotes: [
      "Tokens are encrypted and secure",
      "API requests require a valid API key, separate from access tokens",
    ],
    lastUpdated: "2024-12-10",
  },
  {
    id: "waves",
    question: "When is the next invite wave?",
    shortAnswer:
      "Invite waves are rare and unscheduled. We will know of them no sooner than you will.",
    category: "Services",
    sections: [
      {
        title: "Invite Wave Information",
        type: "text",
        content: `
      Invite waves are not scheduled and can happen at any time. We announce them on our Discord server. Make sure to check the announcements channel regularly.`,
      },
      {
        title: "How to Get Invites",
        type: "bullets",
        content: `
      Participate in an invite wave
      Receive one from another user
      Purchase an invite code from our website`,
      },
      {
        title: "Important Notes",
        type: "warning",
        content: `
      You get one invite per wave, unless you have premium
      Do not share your invite code with others
      Each invite code is single-use only`,
      },
    ],
  },
  {
    id: "api-key",
    question: "Where can I find my API key?",
    shortAnswer:
      "You can find your API key on the dashboard. Scroll down to the 'API' section and click the 'View API Key' button.",
    category: "Account Management",
    sections: [
      {
        title: "Finding Your API Key",
        type: "steps",
        content: `
          1. Log into your account
          2. Enter the dashboard
          3. Navigate to Account settings
          4. Click the 'Copy API Key' button
        `,
      },
      {
        title: "API Key Example",
        type: "code",
        content: `
          Keiran_05n12n9uxo6a09opfba6uxyz08hccc
        `,
      },
    ],
    images: [
      {
        url: "/assets/faq/api-key.png",
        alt: "Copy API key button",
        caption: "Where to find your API key",
      },
    ],
    relatedQuestions: ["authentication"],
    additionalNotes: [
      "API keys are unique to each user and should never be shared",
      "API keys are needed for all API requests",
      "API keys can be regenerated if necessary, invalidating the old one",
    ],
    lastUpdated: "2024-12-12",
  },
];

export function getFAQ(id: string): FAQ | undefined {
  return faqs.find((faq) => faq.id === id);
}

export function getRelatedFAQs(id: string): FAQ[] {
  const faq = getFAQ(id);
  if (!faq || !faq.relatedQuestions) return [];
  return faqs.filter((f) => faq.relatedQuestions?.includes(f.id)) || [];
}
