function searchBackend() {
    console.log("Search Backened");
}
let timer;
function debouncedSearchBackend() {
    
    clearTimeout(timer);
    timer = setTimeout(searchBackend,300);
}

debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
