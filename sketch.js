//const imgs = []
const numImgs = 8
const imgs = Array.from({ length: numImgs})
let imageCounter = 0

function preload(){
    //load the images
    console.log(imgs)
    imgs.forEach((img, i) => imgs[i] = (loadImage(`apple/apple_`+i+'.png')))
    console.log(imgs)
}

function setup(){
    createCanvas(600, 600)
    frameRate(2)

}

function draw(){
    //draw an image from the array of images
    clear() 
    background(249, 250, 222)
    image(imgs[imageCounter], 50, 80, 500, 500);
    imageCounter++;
    imageCounter = imageCounter % numImgs;
    console.log(imageCounter)
}