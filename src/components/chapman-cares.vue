<template>
    <div class="chapman-cares">
        <HeadingText>Chapman Cares</HeadingText>

        <img
            :src="require('@/assets/cares-banner.jpg')"
            alt="Chapman Cares"
            class="banner-img"
        />

        <div v-for="(event, index) in events" :key="index" class="event">
            <div class="wrapper">
                <div class="img-container">
                    <img
                        class="event-image"
                        :src="event.image"
                        alt="loading..."
                    />
                </div>
                <div class="text-container">
                    <h3 class="event-name">{{ event.name }}</h3>
                    <p class="event-text">{{ event.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeadingText from '@/components/heading-text';
import image1 from '../assets/chapman-pink-jeep.jpeg';
import image2 from '../assets/chapman-dogs.jpeg';

export default {
    name: 'ChapmanCares',
    components: {
        HeadingText,
    },
    data() {
        return {
            events: [
                {
                    name: 'Making Strides Against Cancer',
                    text:
                        'Thousands of people, young and old, participated in the Making Strides Against Breast Cancer event at Tempe Beach Park. As a sponsorship partner, Chapman Auto brought the Breast Cancer Pace Car, driven by Danica Patrick. Chapman Auto employees participated in the walk, helping to raise thousands of dollars for breast cancer research.',
                    image: image1,
                },
                {
                    name: 'Canine Companions For Independence',
                    text:
                        'Chapman Auto has been a proud supporter of Canine Companions for Independence for more than 10 years. From sponsoring a golf tournament to puppy training, Chapman Auto employees are proud to work with CCI as they help others live happy, independent lives.',
                    image: image2,
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.banner-img {
    width: 100%;
}
.event {
    margin-top: 2rem;
}
.event-name {
    margin-bottom: 1rem;
    font-size: 23px;
}

.event-text {
    line-height: 2.3;
}
.event-image {
    margin-bottom: 1rem;
    height: auto;
    width: 500px;
    padding-right: 30px;
}
.wrapper {
    display: flex;
}

@media only screen and (max-width: 800px) {
    .wrapper {
        display: flex;
        flex-direction: column;
    }
}
</style>
