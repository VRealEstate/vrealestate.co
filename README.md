# VRealEstate Website
Utilize new research in image stiching and 3d reconstruction from image pairs to provide a 3d tour of home.

Panoramic photography is distorted and flat, a kinect to reconstruct the pcl of a space is twiddly and incomplete. How about we use existing images to reconstruct a 3d perspective. Microsoft Research recently announced stunning developments in the field of image reconstruction from multiple views to produce ICE; In tandem with traditional trigonometric methods, we can approximate the 3d structure of a series (or video) of 2d pictures. This application seeks to demonstrate the power of paying attention in math class.

## Install
From source:

```
git clone https://github.com/vrealestate/vrealestate.co
cd vrealestate.co
npm install
bower install
gulp build
node server.js
```