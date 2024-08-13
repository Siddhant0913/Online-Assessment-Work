figma.showUI(`<script>
const nodes = [];

function createFrame(name, x, y, width, height) {
  const frame = figma.createFrame();
  frame.name = name;
  frame.x = x;
  frame.y = y;
  frame.resize(width, height);
  return frame;
}

function createText(text, fontSize, x, y) {
  const textNode = figma.createText();
  textNode.characters = text;
  textNode.fontSize = fontSize;
  textNode.x = x;
  textNode.y = y;
  return textNode;
}

function createRectangle(name, x, y, width, height, color) {
  const rect = figma.createRectangle();
  rect.name = name;
  rect.x = x;
  rect.y = y;
  rect.resize(width, height);
  rect.fills = [{type: 'SOLID', color: color }];
  return rect;
}

// Create Header
const header = createFrame("Header", 0, 0, 375, 60);
const headerText = createText("Home Appliance Control", 24, 20, 18);
header.appendChild(headerText);
nodes.push(header);

// Create Appliance Items
const applianceList = createFrame("Appliance List", 0, 70, 375, 500);

const appliances = ["Fan", "Air Conditioner", "TV", "Lights", "Bulbs"];
const operations = ["ON/OFF", "Temperature", "Speed", "Brightness", "Color"];
const colors = [
  { r: 0.8, g: 0.8, b: 0.8 },
  { r: 0.6, g: 0.8, b: 0.9 },
  { r: 0.9, g: 0.7, b: 0.7 },
  { r: 0.7, g: 0.7, b: 0.9 },
  { r: 0.7, g: 0.9, b: 0.7 }
];

for (let i = 0; i < appliances.length; i++) {
  const yPosition = i * 100;
  const applianceItem = createFrame(appliances[i], 0, yPosition, 375, 80);
  const applianceText = createText(appliances[i], 20, 20, 20);
  const operationText = createText(operations[i], 16, 200, 20);
  const rect = createRectangle("Toggle", 330, 20, 30, 30, colors[i]);

  applianceItem.appendChild(applianceText);
  applianceItem.appendChild(operationText);
  applianceItem.appendChild(rect);

  applianceList.appendChild(applianceItem);
}

nodes.push(applianceList);

// Add to Figma Scene
figma.currentPage.selection = nodes;
figma.viewport.scrollAndZoomIntoView(nodes);

</script>`, { width: 400, height: 600 });
