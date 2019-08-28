export const dataReady = {
    fullName: "Full Name",
    photo: "../img/vk.png",
    personal: {
        aside: {
            details: [
                {
                    title: "title of the Aside Item",
                    details: "details of the Aside Item title"
                }
            ],
            skills: [
                {
                    title: "title of the Aside Skills Item",
                    details: [
                        {
                            title: "title of the Skill",
                            details: "100"
                        }
                    ]
                }
            ]
        },
        content: {
            title: "Title of the Content",
            details: [
                {
                    remark: null,
                    subheading: null,
                    p: ['paragraph 1', 'paragraph 2']
                },
                {
                    remark: "Remark",
                    comments: "Comments",
                    subheading: "subheding h3",
                    li: ['li element 1', 'li element 2']
                },
                {
                    remark: "Remark",
                    subheading: "subheding h4",
                    a: [
                        {
                        "title": "Link Title",
                        "path": "Link Path"
                        },
                    ]
                },
                {
                    subheading: "CV Downloads",
                    file: [
                        {
                            "title": "English CV Version",
                            "src": "../cvData/VKomolov_ENG19_FE.pdf"
                        },
                        {
                            "title": "Russian CV Version",
                            "src": "../cvData/VKomolov_RUS19_FE.pdf"
                        }
                    ]
                }
            ]
        }
    },
};