module.exports = {
    posts: [
        {
            id: "kp2haa227u",
            title: "First warning",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum orci a mauris malesuada mollis. Donec hendrerit eros vel elit vestibulum auctor. In rhoncus, ex sit amet vulputate commodo, purus velit efficitur diam, at tempus metus orci ut neque. Nunc eu cursus ante, a fermentum magna. Suspendisse imperdiet iaculis ligula, a condimentum nisl iaculis a. Duis imperdiet, nunc quis ornare scelerisque, lorem massa molestie sem, sed ultrices lacus sem hendrerit erat. Etiam ac nulla eget tellus volutpat pretium."
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