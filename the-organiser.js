const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'output', 'messy-files');

const organziedDir = path.join(__dirname, 'output', 'organized-files');
const categories = {
  images: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg'],
  documents: ['.pdf', '.doc', '.docx', '.txt', '.rtf'],
  videos: ['.mp4', '.avi', '.mkv', '.mov', '.wmv'],
  audio: ['.mp3', '.wav', '.flac', '.aac', '.ogg'],
  code: ['.js', '.py', '.java', '.cpp', '.html', '.css'],
  archives: ['.zip', '.rar', '.tar', '.gz', '.7z'],
  spreadsheets: ['.xls', '.xlsx', '.csv'],
  others: [],
};
const testFiles = [
  'vacation.jpg',
  'report.pdf',
  'presentation.pptx',
  'music.mp3',
  'video.mp4',
  'script.js',
  'data.csv',
  'archive.zip',
  'photo.png',
  'notes.txt',
  'app.py',
  'movie.avi',
  'song.wav',
  'backup.tar.gz',
  'random.xyz',
  'nodejs.zip',
];
function initializeDirectories() {
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true });
    testFiles.forEach((file) => {
      fs.writeFileSync(path.join(sourceDir, file), `Content of ${file}`);
    });
  }
  console.log('Messy directories files are created!!');
  if (!fs.existsSync(organziedDir)) {
    fs.mkdirSync(organziedDir, { recursive: true });
  }
  Object.keys(categories).forEach((cat) => {
    const catPath = path.join(organziedDir, cat);
    if (!fs.existsSync(catPath)) {
      fs.mkdirSync(catPath);
    }
  });
}


function getcatagorey(fileName) {
  const ext = path.extname(fileName).toLocaleLowerCase();
  // [images]: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg']],
  for (const [catagory, extensions] of Object.entries(categories)) {
    if (extensions.includes(ext)) {
      return catagory;
    }
  }
  return 'others';
}
function organizeFiles() {
  console.log('File Organizer \n');
  console.log('source: ', sourceDir);
  console.log('Destination : ', organziedDir);
  console.log('\n' + '-'.repeat.apply(50) + '\n');
  const files=fs.readdirSync(sourceDir);
  if(files.length==0){
    console.log("There is no files to work on!!!");
    return;
  }
  console.log(`Found ${files.length} files to organize \n`);
  const stats={
    total:0,
    byCategory:{}
  }
  files.forEach((file)=>{
    const sourcePath=path.join(sourceDir,file);
    const stat=fs.statSync(sourcePath);
    if(stat.isDirectory()){
      return;
    }
    const catagorey=getcatagorey(file);
    const destDir=path.join(organziedDir,catagorey);
    const destPath=path.join(destDir,file);
    fs.copyFileSync(sourcePath,destPath);
    stats.total++;
    stats.byCategory[catagorey]=(stats.byCategory[catagorey]||0)+1;

    console.log(`${file}`);
    console.log(`${catagorey}`);
    console.log(`${stat.size}`);
  })
}
const showHelp=()=>{
  console.log(`
    File organizer usage:
    commands:
    init-create files

    organize-organize files into catagories
     example:
        node file-organizer init
        node file-organizer organize
    `)
}
const command=process.argv[2];
switch(command){
  case "init":{
    initializeDirectories();
    break;
  }
  case "organize":{
    organizeFiles();
    break;
  }
  default:
  showHelp();
  break;
}