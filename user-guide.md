# User guide

## Featured images

Use a screenshot of the app running, presented as a polished promotional image. Choose the screen that best communicates the app's main benefit.

Avoid capturing the entire App Store or Google Play listing page. Store navigation, ratings, and other clutter become difficult to read in a gallery card, and the website's download buttons already link to those listings.

### Composition

- **One clear focal screen:** show the app's most useful or distinctive feature.
- **A coordinated background:** use a subtle color drawn from the app's branding.
- **Minimal text:** let the app name and description below the image explain it.
- **Consistent framing:** use the same image proportions and screenshot scale across apps.
- **Realistic example content:** make the screen understandable without exposing personal information.

A good default is one phone screenshot on a complementary background. Use two screens only when they explain something that one screen cannot.

Existing App Store promotional artwork can be adapted to the website's image ratio. Use the original artwork rather than a screenshot of the store page.

### Image specifications

- **Aspect ratio:** 4:3, matching the website's current app cards.
- **Recommended dimensions:** 1200 x 900 pixels.
- **Preferred format:** WebP.
- **Safe area:** keep essential content away from the edges; cards crop images to fill the frame.

### Add an image to the website

1. Save the image in `public/images/`, for example `public/images/my-app.webp`.
2. Set the image fields in the app's Markdown file under `src/content/apps/`:

   ```yaml
   image: "images/my-app.webp"
   imageAlt: "My App showing its main screen"
   ```

Use descriptive alternative text explaining the actual screen shown. Do not include `public/` in the image path.
