//to see where sails can be worked in skip to the bottom

'use strict';
var app = angular.module("textAngularTest", ['textAngular'])
	.config(function($provide){


		//leaving this in as an example of how to modify textangular
		/*
		$provide.decorator('taOptions', [ '$delegate', function(taOptions){ // $delegate is the taOptions we are decorating
	        // add the button to the default toolbar definition
	        taOptions.toolbar = [
				['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote'],
				['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
				['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],
				['html', 'insertImage','insertLink', 'insertVideo', 'wordcount', 'charcount']
			];
			return taOptions;
		}]);
		*/

		
	})

	.controller('wysiwygeditor', function($scope, sailsPort, textAngularManager, $document) {
		$scope.data = {};
		/*$scope.data.initialContent = {
			title: "<h1>Exciting title here<h1>",
			content1: "<p>Bacon ipsum dolor amet ribeye rump swine jerky flank sirloin. Kevin pork chop capicola shank frankfurter flank alcatra ball tip boudin picanha. Ham hock meatball turducken, pastrami kielbasa drumstick beef ribs ground round chuck t-bone. Capicola picanha venison pork loin, spare ribs turducken pork jowl tri-tip jerky pancetta. Venison hamburger capicola, fatback salami prosciutto brisket tenderloin.</p>",
			content2: "<p>Bacon ipsum dolor amet ribeye rump swine jerky flank sirloin. Kevin pork chop capicola shank frankfurter flank alcatra ball tip boudin picanha. Ham hock meatball turducken, pastrami kielbasa drumstick beef ribs ground round chuck t-bone. Capicola picanha venison pork loin, spare ribs turducken pork jowl tri-tip jerky pancetta. Venison hamburger capicola, fatback salami prosciutto brisket tenderloin.</p>"
		};*/
		$scope.data.title = sailsPort.initialContent.title
		$scope.data.content1 = sailsPort.initialContent.content1;
		$scope.data.content2 = sailsPort.initialContent.content2;
		//$scope.$watch('data.htmlcontent', function(val){console.log('htmlcontent changed to:', val);});
		$scope.disabled = false;
		$scope.canEdit = true;
		$scope.send = sailsPort.send;


		//leaving this in as an example of how to extend textangular
		/**
		$scope.changetesth1 = function(){
			textAngularManager.updateToolbarToolDisplay('test', 'h1', {buttontext: 'Heading 1'});
		};**/

	});


/**
	This is a placeholder JSON object for data that will eventually be sent from the server
**/

var initialContent = {
	title: "<h1>Exciting title here<h1>",
	content1: "<p>Bacon ipsum dolor amet ribeye rump swine jerky flank sirloin. Kevin pork chop capicola shank frankfurter flank alcatra ball tip boudin picanha. Ham hock meatball turducken, pastrami kielbasa drumstick beef ribs ground round chuck t-bone. Capicola picanha venison pork loin, spare ribs turducken pork jowl tri-tip jerky pancetta. Venison hamburger capicola, fatback salami prosciutto brisket tenderloin.</p>",
	content2: "<p>Bacon ipsum dolor amet ribeye rump swine jerky flank sirloin. Kevin pork chop capicola shank frankfurter flank alcatra ball tip boudin picanha. Ham hock meatball turducken, pastrami kielbasa drumstick beef ribs ground round chuck t-bone. Capicola picanha venison pork loin, spare ribs turducken pork jowl tri-tip jerky pancetta. Venison hamburger capicola, fatback salami prosciutto brisket tenderloin.</p>"
};


//the following line of code adds the initial page data to angular when the page loads,
//and it also has a function (send) for handling data* that has been edited.
//Currently this data is just being sent to the console, but it should be fairly easy to reroute within this function
// *data is in the form of a string containing fully formated html

app.factory('sailsPort', function(){

	var sailsPort = {};

	sailsPort.initialContent = initialContent;

	sailsPort.send = function(content){
		console.log(content);
	};

	return sailsPort;
});

$(document).ready(function(){
	$(".cms-icon").click(function(){

		var iconContainer = $(this).parent();

		if (iconContainer.hasClass("cms-edit")) $(this).trigger("submit");

		iconContainer.toggleClass("cms-edit");

	});
});