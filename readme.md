# Scuffed bobber

This is the code used by Mastahiro on [Twitch](https://twitch.tv/mastahiro) and [YouTube](https://www.youtube.com/user/Shiromashai) for voice-activated picture movement.

Just extract and open index.html in a browser.

There is no installation required or external apps, and should run on Mozilla/Chrome, although it was only tested with Chrome.


## Configuration

The program runs on two different modes, changed with `USEDICTIONARY` being set to true or false within the `config.js`.

### Simple Mode:

Image will switch to `<keypress>.png` within the `images` folder and defaults to `DEFAULTLETTER.png` if it doesn't find it.

### Dictionary Mode:

Based on the `DICTIONARY` the image will be set to that specific input.

```js
const DICTIONARY = {
	'0':'0.png',
	'\\':'mastaSmug2.png',
	'1':'mastaSmug.png',
	'q':'mastaShocked.png',
}
```

Dictionary mode also allows the use of overlays over the image, as set by the other variables in the same file.

If you want to understand how the layering works further, check the comments within the configuration file.

## (Optional) Additional notes on filehosting

Although not provided, it is possible to provide the `index.html` file on localhost instead, allowing for direct access, which eliminates the need for microphone use confirmation by pressing the `Start` button. In this case, comment out the `app.js` code to run directly and remove the start button and everything should work smoothly, as long as the file is being provided remotely.

##License

Program is licensed under [CC 3.0 Attribution](https://creativecommons.org/licenses/by/3.0/) but please do not use the images and replace them with your own. Thank you!
