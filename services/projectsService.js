
var getProjects = function () {
    var projects = [
        {
            id: 1,
            name: 'Blog',
            image: 'post1.jpg',
            subject: 'Programação Server-Side',
            description: 'Meu primeiro blog bla blaa sdfa sdfas df asdf asdf asdf asdf'
        },
        {
            id: 2,
            name: 'Projeto',
            image: 'post2.jpg',
            subject: 'Teste',
            description: 'bla blaa sdfa sdfas df asdf asdf asdf asdf'
        }
    ];

    return projects;
}

module.exports = {
    getProjects: getProjects
}