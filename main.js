var app = new Vue({
	el: '#app',
	data: {
		images: [
			{
				id: 2,
				link: './assets/Layer1.png'
			},
			{
				id: 3,
				link: './assets/Layer4.png'
			},
			{
				id: 4,
				link: './assets/Layer5.png'
			},
			{
				id: 5,
				link: './assets/Layer6.png'
			},
			{
				id: 6,
				link: './assets/Layer7.png'
			},
			{
				id: 7,
				link: './assets/Layer8.png',
				linkMorphBack: './assets/Layer8-morphBack.png'
			}
		]
	},
	methods: {
		nextImage() {
			const first = this.images.shift();
			this.images = this.images.concat(first);
		},
		prevImage() {
			const last = this.images.pop();
			this.images = [last].concat(this.images);
		}
	}
})