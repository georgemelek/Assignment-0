function titleCaseEdit(title) {
  words = title.split(" ");
	for (let i = 0; i < words.length; i++){
		words[i] = words[i][0].toUpperCase() + words[i].substr(1);
	}
	return words.join(" ");
}
console.log(titleCaseEdit("George is cool"));
// Do not edit this line;
module.exports = titleCaseEdit;