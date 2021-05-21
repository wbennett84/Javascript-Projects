// this function is the creation of a library
function my_Dictionary() {
    // these are the KVP's
    var Table = {
        Type:"Yes",
        Type:"Folding",
        Color:"Black",
        Thickness:"4 inches",
        Medium:"Wood",
    };
    //this deletes the "medium: wood KVP and will mess up the output"
    delete Table.Medium;
    //this sets up the paragraph tag to be filled with the output of some of the library data
    document.getElementById("Dictionary").innerHTML = Table.Medium;
}