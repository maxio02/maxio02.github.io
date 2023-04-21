link = window.location.href
const re = /#(\w+)/;
const projectToOpen = re.exec(link);

const itemToOpen = document.getElementById(projectToOpen[1])

expandItem(itemToOpen)