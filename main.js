var app = new Vue({
	el: '#app',
	data: {
		images: [
			{
				id: 1,
				link: './assets/image1.png'
			},
			{
				id: 2,
				link: './assets/image2.png'
			},
			{
				id: 3,
				link: './assets/image3.png'
			},
			{
				id: 4,
				link: './assets/image4.png'
			},
			{
				id: 5,
				link: './assets/image5.png'
			},
			{
				id: 6,
				link: './assets/image6.png'
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