function getStudentName(){
    let student = {
        name: "Nguyen Xuan Huy",
        class: 123,
    };
    return student.name;
}
//tu khoa module, xuất ra sử dụng exports
module.exports = {
    getStudentName: getStudentName
}