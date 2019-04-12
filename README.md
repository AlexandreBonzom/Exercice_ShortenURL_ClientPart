This project was done for a little projet during my bootcamp.
Purpose is to shporten URL.
It was done ising React, ReactRouter.

## Functionnalities

- Shorten URL.

Enter an URL then the interface will add 5 random characters and adding them to "https://short-url-alexandre-bonzom.herokuapp.com/"
When clicking on the shorten link, the client is redirect through the ReactRouter/Switch to correct URL and then redirect to original URL. Then it increments the visits number.
It is not possible to enter the same URL already shorten.
A validator has been added (through NPM package)

- Show all shorten URL in array.
  The home page shows all the shorten URL with original url, the shorten version and the number of visits.

* To Do:
  Improving the validator of URL. Indeed, a lot of possibilities are possible to go around the current validator. (possiblity: send a GET request to the desired url to shorten, if the response returns with a status then the url is valid. Also problem could be with CORS security when the url is valid)

Modified : 12/04/2018
