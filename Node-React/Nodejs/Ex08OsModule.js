//Os module gives information about the operating system. It has apis to get info about the OS like processors, memory, network interfaces, architecture and many more. 
import os from 'os';
console.log("Operating System platform: ", os.platform());//Returns the platform of the operating system. It can be 'win32', 'linux', 'darwin' etc.
console.log("Operating System architecture: ", os.arch());//Returns the architecture of the operating system. It can be 'x64', 'arm', 'ia32' etc.
//Any details regarding the Os can be obtained using os module.
console.log("The CPU information: ", os.cpus());//Returns an array of objects containing information about each logical CPU core. Each object contains properties like model, speed, times etc.
console.log("The uptime of the Machine is " + os.uptime() + " seconds");//Returns the uptime of the machine in seconds. It is the time since the machine was last restarted.
console.log("The total memory of the machine is " + os.totalmem() + " bytes");//Returns the total amount of system memory in bytes.
console.log("The free memory of the machine is " + os.freemem() + " bytes");//Returns the amount of free system memory in bytes.//Convert it to MB
console.log("The Home directory: " + os.homedir());
console.log("The PC Name: " + os.hostname());
console.log("The Temp directory: " + os.tmpdir());
