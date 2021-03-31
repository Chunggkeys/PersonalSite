import vega from "../images/thumbnails/vega-thumbnail.jpg"
import polaris from "../images/thumbnails/polaris-thumbnail.jpg"
import katMizu from "../images/thumbnails/kat-mizu-thumbnail.png"
import gmkSumi from '../images/thumbnails/gmk-sumi-thumbnail.png'
import ffffSwitch from '../images/thumbnails/ffff-switch-thumbnail.jpg'
import vegaFull from "../images/vega-sample.jpg"
import gmkSumiFull from "../images/gmk-sumi-sample.png"
import polarisFull from "../images/polaris-sample.jpg"
import katMizuFull from "../images/kat-mizu-sample.png"

const inventory = [
    {
        id : 1,
        name : "Vega Case",
        type : "case",
        price : 400,
        description : "Vega case ONLY",
        thumbnail : vega,
        img : vegaFull
    },
    {
        id : 2, 
        name : "Polaris Case",
        type : "case",
        price : 300,
        description : "Polaris case ONLY",
        thumbnail : polaris,
        img : polarisFull
    },
    {
        id : 3,
        name : "KAT Mizu",
        type : "keycaps",
        price : 150,
        description : "KAT Mizu base kit ONLY",
        thumbnail : katMizu,
        img : katMizuFull
    },
    {
        id : 4,
        name : "GMK Sumi",
        type : "keycaps",
        price : 193,
        description : "GMK Sumi base kit ONLY",
        thumbnail : gmkSumi,
        img : gmkSumiFull
    },
    {
        id : 5,
        name : "Matrix Labs - FFFF Switch",
        type : "keyswitches",
        price : 67,
        description : "FFF Switch only, sold in sets of 10",
        thumbnail : ffffSwitch,
        img : ""
    }
] 


export { inventory }