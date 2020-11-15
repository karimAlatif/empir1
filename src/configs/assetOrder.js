
import {Positions, TextureTypeEnum } from './config'

const assetOrder = {
    "step1": [
        {name:"image0.jpg",position : Positions.topRight, type: TextureTypeEnum.standard},
        {name:"image1.jpg",position : Positions.bottomLeft, type: TextureTypeEnum.standard},
        {name:"video2.mp4",position : Positions.bottomRight, type: TextureTypeEnum.standard},
        {name:"image3.jpg",position : Positions.topLeft, type: TextureTypeEnum.standard},
        {name:"video4.mp4",position : Positions.topRight, type: TextureTypeEnum.standard},
        {name:"image5.jpg",position : Positions.bottomLeft, type: TextureTypeEnum.standard},
    ],
    "step2": [
        {name:"empty0.png",position : Positions.topRight, type: TextureTypeEnum.standard},
        {name:"video1.mp4",position : Positions.middle, type: TextureTypeEnum.roadBlock},
    ],
    "step3": [
        {name:"image0.jpg",position : Positions.bottomLeft, type: TextureTypeEnum.standard},
        {name:"image1.jpg",position : Positions.topRight, type: TextureTypeEnum.standard},
    ],
    "step4": [
        {name:"video0.mp4",position : Positions.middle, type: TextureTypeEnum.roadBlock}
    ],
    "step5": [
        {name:"empty0.png",position : Positions.bottomLeft, type: TextureTypeEnum.standard},
        {name:"empty1.png",position : Positions.leftText, type: TextureTypeEnum.standard},
        {name:"empty2.png",position : Positions.rightText, type: TextureTypeEnum.standard},
        {name:"empty3.png",position : Positions.leftText, type: TextureTypeEnum.standard},
        {name:"gridOne", textures:[
                 { name: "video0.mp4"},
                { name: "image1.jpg"},
                { name: "video10.mp4"},
                { name: "image3.jpg"},
                { name: "image4.jpg"},
                { name: "image5.jpg"},
                { name: "image7.jpg"},
               { name: "video6.mp4"},
                { name: "image8.jpg"},
                { name: "video9.mp4"},
                { name: "image2.jpg"},
                { name: "image11.jpg"},
                { name: "image12.jpg"},
                { name: "video13.mp4"},
                 { name: "image0.jpg"},
            ], type: TextureTypeEnum.grid},
    ]
};
export default assetOrder;