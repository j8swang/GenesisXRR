## What GenesisXR Does
Genesis XR is an extended-reality platform that lets learners experiment with the building blocks of the world, entirely through extended realities. Inside the headset, users can select virtual objects from the left panel, view them together in the center, and see what they form. When two items are combined, the system generates the resulting material and then explains the real scientific process happening beneath the surface.

## Project Deep Dive
Notion Link: https://smiling-cap-7e6.notion.site/Genesis-XR-Learning-Science-by-Experimenting-Not-Memorizing-2dfdf2206e4580f5ab6fdba8cf04fe2d

Some people may know sand and heat come together to form glass, but do they know that sand is largely made of silica, which becomes liquid at high temperatures and hardens into glass when cooled back down? Do they know that pyrolysis, or heating wood with limited oxygen, drives out water and gases, forming a carbon-rich charcoal that burns hotter than wood? The platform shows clear-cut formulas and explanations that make these interactions clear and easy to remember. There is also a built-in library feature that keeps track of your discoveries so that you can refresh on how you put together different combinations and how the science behind them works.

The platform benefits the user because they can manipulate the pieces themself, meaning they are more likely to remember what they learn than just watching or listening to someone else. Instead of generic explanations, our platform provides a concise and detailed explanation of the scientific mechanisms and phenomena behind materials.

## How to Install/Run
Fork this GitHub repository and open it in an IDE of your choice. Make sure you have all of the proper dependencies for Webspatial installed:
- Node.js v18+
- Vite 6.x
- Xcode
- VisionOS Simulator 26.0

In terminal, run “XR_ENV=avp npm run dev” to run the program. Keep track of the localhost URL you are given. While that is running, open up a new terminal window and run “npx webspatial-builder run --base=$[paste the given localhost URL here]. The visionOS simulator should launch our software.

## What’s Included/Not Included
This repository includes all the software and assets needed to run GenesisXR. The dependencies needed for Webspatial are not included.
