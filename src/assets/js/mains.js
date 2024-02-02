$(".myInfiniteScroll").infiniteScroll({
    preloaderColor: "#007bff",
    files: [
        "./content/content1.html",
        "./content/content2.html",
        "./content/content3.html"
    ],
    beforeLoadNewContent: function () { alert("The content is loaded"); },
    onEnd: function () { alert("End"); }
});