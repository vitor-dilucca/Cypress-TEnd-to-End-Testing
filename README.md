
# Best Practices (Recommended by Cypress)

# Contents
- [Test Unhappy Paths](#1---test-unhappy-paths-)
- [Use Stable Selectors](#2---use-stable-selectors-)
- [Do Not Assign Return Values](#3---do-not-assign-return-values-)
- [Do Not Test External Sites](#4---do-not-test-external-sites-)
- [Keep Tests Independent](#5---keep-tests-independent-)
- [Avoid Writing Tiny Tests](#6---avoid-writing-tiny-tests-)
- [Clean Up State Before Tests Run](#7---clean-up-state-before-tests-run-)


## 1 - Test Unhappy Paths [^](#contents)
Test scenarios where users might behave maliciously or actions uncommon in your app.

## 2 - Use Stable Selectors [^](#contents)
Utilize data-* attributes for selectors, isolating them from CSS or JS changes. Avoid targeting elements based on CSS attributes like id, class, or tag. Do not rely on elements that might change their textContent. Avoid overly generic selectors (e.g., cy.get(button)). Decouple selectors from styles.

## 3 - Do Not Assign Return Values [^](#contents)
Cypress does NOT run synchronously. Refer to the *docs.

## 4 - Do Not Test External Sites [^](#contents)
Test only websites under your control. Minimize visits to or reliance on third-party servers. Use cy.request() for 3rd party server interactions via APIs. If possible, cache results using cy.session() to avoid repeated visits.

## 5 - Keep Tests Independent [^](#contents)
Avoid interdependent tests, which become hard to manage.

## 6 - Avoid Writing Tiny Tests [^](#contents)
Writing small tests, similar to unit tests, is non-performant and excessive. It may hinder performance due to Cypress's state resets and test isolation.

## 7 - Clean Up State Before Tests Run [^](#contents)
Avoid cleaning up state with after or afterEach hooks. Cypress manages state between tests. Consider using route aliases or assertions to control Cypress until specific conditions are met. Refer to the *docs.

---

<br>
<br>
<hr>
<hr>
<hr>
<br>
<br>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

