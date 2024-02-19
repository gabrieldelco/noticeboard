module.exports = {
    posts: [
        {
            id: "sidufh",
            title: "Teste do Mural",
            description: "Descrição teste"
        },
    ],

    getAll() {
        return this.posts;
    },

    newPost(title, description) {
        this.posts.push({ id: generateID(), title, description });
    },

    deletePost(id) {
        const index = this.posts.findIndex(p => p.id === id)
        if (index !== -1) {
            this.posts.splice(index, 1);
        }
    }

}

function generateID() {
    return Math.random().toString(36).substring(2, 13);
}