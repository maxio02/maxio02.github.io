link = window.location.href
const re = /#(\w+)/;
const projectToOpen = re.exec(link);
try {
    const itemToOpen = document.getElementById(projectToOpen[1])
    expandItem(itemToOpen);
} catch (error) {

}


