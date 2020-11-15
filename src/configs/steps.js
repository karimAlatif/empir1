const steps = {
    intro: {
        textColor: 0xffffff,
        outlineTextColor: 0x1d2f1b,
        bgColor: 0x1d2f1b,
        tintColor: 0xffffff
    },
    step1: {
        name: ['Step 1'],
        textColor: 0xffffff,
        bgColor: 0x1d2f1b,
        tintColor: 0x1d2f1b
    },
    step2: {
        name: [`Step 2`],
        textColor: 0xffffff,
        bgColor: 0x000000,
        tintColor: 0x212b32
    },
    step3: {
        name: ['Step 3'],
        textColor: 0xffffff,
        bgColor: 0xe4ae45,
        tintColor: 0xe4ae45
    },
    step4: {
        name: ['Step 4'],
        textColor: 0xffffff,
        bgColor: 0x000000,
        tintColor: 0x000000
    },
    step5: {
        name: ['Step 5'],
        textColor: 0xffffff,
        bgColor: 0x1e1e1e,
        tintColor: 0x1e1e1e
    },
    end: {
        textColor: 0xffffff,
        outlineTextColor: 0x000000,
        bgColor: 0x000000,
        tintColor: 0x000000
    }
}
export const main = {
    into : {
        title:[
            [`.`],
        ],
        textuers:[
        ],
    },
    end : {
        title:[
            `The first military unit of the Ottoman State was an army`,
            `that was organized by Osman I from the tribesmen inhabiting`,
            `the hills of western Anatolia in the late 13th century`,
        ],
        textuers:[
            {
                name:"image0.jpg",
                position : {
                    x: -720,
                    y: 230,
                    z: -250,
                },
                scale:{
                    x:700,
                    y:500,
                },
                type:"none"

            },
            {
                name:"image1.jpg",
                position : {
                    x: -300,
                    y: -400,
                    z: -250,
                },
                scale:{
                    x:330,
                    y:270,
                },
                type:"none"

            },
            {
                name:"image2.jpg",
                position : {
                    x: 600,
                    y: 100,
                    z: -250,
                },
                scale:{
                    x:530,
                    y:380,
                },
                type:"none"

            },
        ],
    }
}
export default steps