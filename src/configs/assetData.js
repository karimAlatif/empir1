//Hello PJ --- Note !!
//text param for text that placed after image
//caption param for text that placed below the image
//link param for button that placed below the image and it's href
export const videoTypes = {
    youtube:"youtube",
    vimeo:"vimeo",
    local:"local",
}
export const modeTypes = {
    fullScreen:"fullScreen",
    window:"window",
}
export const videoType3D = {
    threeD:"threeD"
}
export const textType3D = {
    normal:"normal",
    oneText:"oneText",
    titlewithHeader:"titlewithHeader",
    quotes:"quotes "
}


const assetData = {
    "step1": {
        "image0.jpg": {
            text:[
            ],
            caption: "Media launch at the Art Science Museum, Singapore",
            link: "",
            copyRight:"© Phoria"

        },
        "image1.jpg": {
            text:[
                `The word Ottoman is a historical anglicisation of`,
                `the name of Osman I, the founder of the Empire and`, 
                `of the ruling House of Osman's name in turn was the Turkish`,
            ],
            caption: "Immersive technology",
            link: "",
            copyRight:"© Arup"
        },
        "video2.mp4": {
            text:[
            ],
            caption: "Rewild our planet: Immersive technology",
                link: ""
        },
        "image3.jpg": {
            text:[
            ],
            caption: "Demonstrating how it works",
            link: "",
            copyRight:"© Arup"
        },
        "video4.mp4": {
            text:[
                `The word Ottoman is a historical anglicisation of`,
                `the name of Osman I, the founder of the Empire and` ,
                `of the ruling House of Osman's name in turn was the Turkish`,
            ],
            caption: "Interacting in the space",
            link: "",
            copyRight:"© Arup"
        },
        "image5.jpg": {
            text:[
            ],
            caption: "Frozen ecosystem",
            link: "",
            copyRight:"© Gauthier Bassée"
        },
    },
    "step2": {
        "empty0.png": {
            text:[
                `The word Ottoman is a historical anglicisation of`,
                `the name of Osman I, the founder of the Empire and` ,
                `of the ruling House of Osman's name in turn was the Turkish`,
            ],
            caption: "",
            link: ""
        },
        "video1.mp4": {
            text:[
            ],
            caption: "See how the experience looked",
            link: "",
            videoData:{ //In Case RoadBlock only
                videoId:"DxWiWCIzZ5s",
                videoType: videoTypes.youtube,
                mode: modeTypes.fullScreen,
                description:"",
                link:"",
            }
        }
    },
    "step3": {
        "image0.jpg": {
            text:[
            ],
            caption: "Arup sound engineers",
            link: "",
            copyRight:"© Arup"
        },
        "image1.jpg": {
            text:[
                `The word Ottoman is a historical anglicisation of`,
                `the name of Osman I, the founder of the Empire and` ,
                `of the ruling House of Osman's name in turn was the Turkish`,
            ],
            caption: "Stage design coming together",
            link: "",
            copyRight:"© Phoria"
        }
    },
    "step4": {
        "video0.mp4": {
            text:[
            ],
            caption: "Watch the stage design take shape",
            link: "",
            videoData:{ //In Case RoadBlock only
                videoId:"GwiM1Whct3c",
                videoType: videoTypes.youtube,
                mode: modeTypes.fullScreen,
                description:"here's description",
                link:"",
            }
        }
    },
    "step5": {
        "empty0.png": {
               text:[
                `The word Ottoman is a historical anglicisation of`,
                `the name of Osman I, the founder of the Empire and` ,
                `of the ruling House of Osman's name in turn was the Turkish`,
            ],
            caption: "",
            link: ""
        },
        "empty1.png": {
            text:[
                `Malik K, France`,
                `“I pledge to restore`,
                `nature where I live”      `,
            ],
            caption: "",
            link: "",
            type:textType3D.quotes,
        },
        "empty2.png": {
            text:[
                `Jayden, USA`,
                `“I pledge to change  `,
                `the way I eat”`,
            ],
            caption: "",
            link: "",
            type:textType3D.quotes,
        },
        "empty3.png": {
            text:[
                `Farah, Indonesia`,
                `“I pledge to change   `,
                `what I buy”`,
            ],
            caption: "",
            link: "",
            type:textType3D.quotes,
        },
        "empty4.png": {
            text:[
                `Liam, Ireland`,
                `“I pledge to embrace  `,
                `renewable energy”     `,
            ],
            caption: "",
            link: "",
            type:textType3D.quotes,
        },
        "empty5.png": {
            text:[
                `Daiwick D, India`,
                `“I pledge to ask my government     `,
                `leaders to protect nature”`,
            ],
            caption: "",
            link: "",
            type:textType3D.quotes,
        },
        "gridOne": {
              "video0.mp4": {
                text:[
                ],
                caption: "@alexcontreras.co / Instagram",
                link: ""
            },
            "image1.jpg": {
                text:[
                ],
                caption: "@meehriyum / Instagram",
                link: ""
            },
             "video10.mp4": {
                text:[
                ],
                caption: "@phoria.io / Instagram",
                link: ""
            },
            
            "image3.jpg": {
                text:[
                ],
                caption: "@samueltates / Instagram",
                link: ""
            },
            "image4.jpg": {
                text:[
                ],
                caption: "@phoria.io / Instagram",
                link: ""
            },
            "image5.jpg": {
                text:[
                ],
                caption: "@phoria.io / Instagram",
                link: ""
            },
            "image7.jpg": {
                text:[
                ],
                caption: "@artsciencemusemsg / Instagram",
                link: ""
            },
            "video6.mp4": {
                text:[
                ],
                caption: "@phoria.io / Instagram",
                link: ""
            },
            "image8.jpg": {
                text:[
                ],
                caption: "@phoria.io / Instagram",
                link: ""
            },
            "video9.mp4": {
                text:[
                ],
                caption: "@artsciencemusemsg / Instagram",
                link: ""
            },
            "image2.jpg": {
                text:[
                ],
                caption: "@meehriyum / Instagram",
                link: ""
            },
            "image11.jpg": {
                text:[
                ],
                caption: "@honorharger / Instagram",
                link: ""
            },
            "image12.jpg": {
                text:[
                ],
                caption: "@theasianparent / Instagram",
                link: ""
            },
            "video13.mp4": {
                text:[
                ],
                caption: "@theasianparent / Instagram",
                link: ""
            },
"image0.jpg": {
                text:[
                ],
                caption: "@meehriyum / Instagram",
                link: ""
            },

        }
    }
}
export default assetData;