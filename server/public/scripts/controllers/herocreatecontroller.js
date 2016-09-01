app.controller('heroCreateController', ['$scope', '$http', function($scope, $http) {
    $scope.alias = "";
    $scope.fName = "";
    $scope.lName = "";
    $scope.city = "";
    $scope.power_name = "";
    $scope.powers = [{
        id: 0, //I needed a number here, when I did value, it returned string:barnyard which wouldn't work with the URL
        label: "Invisibility" //Dropdown Label
    }, {
        id: 1,
        label: "Flight"
    }, {
        id: 2,
        label: "Super Speed"
    }, {
        id: 3,
        label: "Heat Vision"
    }, {
        id: 4,
        label: "Super Strength"
    }, {
        id: 5,
        label: "Accelerated Healing"
    }, {
        id: 6,
        label: "Power Blast"
    }, {
        id: 7,
        label: "Animal Affinity"
    }];
    $scope.hero = {};
    $scope.addHero = function() {
        console.log($scope.alias, $scope.fName, $scope.lName, $scope.city, $scope.powers[$scope.power_name].label);
        $scope.hero.alias = $scope.alias;
        $scope.hero.first_name = $scope.fName;
        $scope.hero.last_name = $scope.lName;
        $scope.hero.city = $scope.city;
        $scope.hero.power_name = $scope.powers[$scope.power_name].label;
        var data = $scope.hero;
        console.log(data);
        $http.post('/heros', data)
            .then(function() {
                console.log('POST /heros', data);
            });
    };
}]);
//
//
// getBooks();
//
// /** --- Scoped functions -- **/
// $scope.sortBy = function(propertyName) {
//     $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
//     $scope.propertyName = propertyName;
// };
//
// $scope.submitNewBook = function() {
//     var data = $scope.newBook;
//     $http.post('/books', data)
//         .then(function() {
//             console.log('POST /books', data);
//             getBooks();
//         });
// };
//
// $scope.deleteBook = function(id) {
//     $http.delete('/books/' + id)
//         .then(function() {
//             console.log('DELETE /books/', id);
//             getBooks();
//         });
// };
//
// $scope.updateBook = function(book) {
//     var id = book._id;
//
//     $http.put('/books/' + id, book)
//         .then(function() {
//             console.log('PUT /books', id);
//             getBooks();
//         });
// };
//
// $scope.displayComments = function(id) {
//     $scope.displayBookId = id;
// };
//
// $scope.submitComment = function(id) {
//     var data = $scope.newComment;
//     $http.post('/books/' + id + '/comments', data)
//         .then(function() {
//             console.log('POST /books/', id, '/comments', data);
//             $scope.newComment = {};
//             getBooks();
//         });
// };
//
// /** -- Utility functions -- **/
// function getBooks() {
//     $http.get('/books')
//         .then(function(response) {
//             console.log('GET /books', response.data);
//
//             var bookDataArray = response.data;
//
//             bookDataArray.forEach(function(book) {
//                 book.publishDate = new Date(book.publishDate);
//             });
//
//             $scope.books = bookDataArray;
//         });
// }
