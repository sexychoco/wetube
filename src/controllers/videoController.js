export const trending = (req,res) =>res.render("home", {pageTitle: "Home"});

export const edit = (req,res) => res.render("edit");
    
export const see = (req,res) =>res.render("watch")


export const search = (req,res) => res.send("search");

export const upload = (req,res) => res.send("Upload");

export const deleteVideo = (req,res) => {
    return res.send("Delete Video");
}