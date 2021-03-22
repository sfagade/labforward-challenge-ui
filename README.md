This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<p>I have tried as much as possible to make this solution very simple. I have one page which is the landing page with a form that when submitted makes a call to the REST service (which should be running). The landing page then returns the outcome of the call made. </p>

<p>I suppose I could/ should wrap the backend call in a try-and-catch, because there is an instance in which the backend to throw an exception and the frontend needs to handle it or the server may simply be down.</p>


