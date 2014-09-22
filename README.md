## chir: an R language plugin for Lighttable

### Usage
place your cursor in a line in one R file, hit "ctrl-enter"

### Warning
1. In order to run this plugin, you have to have "rterm" in your system PATH
2. For now, it just evaluates a single line code, and this code has to return an evaluation result. In fact, this plugin sends code to R process line by line just like in an R terminal, so do not evaluate code like below

```{r}
b = function(){
```

3. This plugin is different from other language plugins. It uses process communication instead of socket communication. I tried socket communication first with failure, because I have little knowledge of how socket works in R.
4. It does not work as expected for now, there are mainly two issues:
	- The evaluation result will not pop until the next hit of "ctrl-enter". For example, if you hit "ctrl-enter" one line 2, then on line 3, the plugin will place the output of line two under line 3. I cannot figure out why.
	- Hit "ctrl-enter" too fast will place multiple output from R together.
5. It seems to me that the above problem is caused by nodejs's `chlid_process` module or I do not use it right. I am not familiar with node.js, please lend me some help if you have expertise, experience in nodejs.
6. It does not deal with R exceptions.

### Note
- I have some idea of expanding this plugin into a more complete and functional one, but for now it seems like that I am having trouble solving the main issues listed above.
- It takes me about two weeks (during my spare time) to write this plugin. And its purpose is to help me understand have the BOT works in lighttable and how lighttable interacts with other processes.



I am a math student at THU, China. I actually major in pure math, but with interests in programming and statistics. My programming toolkit includes Clojure, R and common lisp. And I also know some python and C/C++.





