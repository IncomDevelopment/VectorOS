var terminal = {
  addcmd: function(name,func){
    if (this.commands[name] === null || this.commands[name] === undefined){
      this.commands[name] == func;
      console.log("Added Command Suscessfully");
      return true;
    } else {
      console.log("Error! Command Already Exists");
      return false; 
    }
  },
  input: function(string){
    if (this.commands[name] === null || this.commands[name] === undefined){
      console.log("Error! Command Doesn't Exist!");
    } else if (typeof this.commands[name] === 'function') {
      this.commands[name](string);
    } else {
      console.log("Error! Command Isn't A Function!");
    }
  },
  commands: []
}
