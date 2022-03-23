<template>
  <div class="text-container projects">
    <div class="projects-top">
      <h2>My work</h2>
      <button class="projects-layout-switcher" @click="switchMode" v-if="mode" >+</button>
    </div>
    <div v-if="mode" class="carousell">
      <button class="carousell-btns btn-back" @click="prevItem" > ← </button>
      <div class="carousell-content">
        <img v-if="!items[index].video && items[index].img" :alt="items[index].title + ' image'" class="carousell-img" :src="items[index].img"/>
        <iframe v-else-if="items[index].video && items[index].img"
            width="100%"
            class="carousell-img"
            :src="items[index].video"
        />
        <div class="carousell-content-text">
          <h3>{{items[index].title}}</h3>
          <h4>
            <span v-for="tech, i in items[index].techs" :key="i">
              {{tech}},
            </span>
          </h4>
          <p>
            {{items[index].desc}}
          </p>
          <a v-if="items[index].url" :href="items[index].url" >{{items[index].urlText}}</a>
          <span v-else >{{items[index].urlText}}</span>
        </div>
      </div>
      <button class="carousell-btns btn-next" @click="nextItem" > → </button>
    </div>
    <div class="gallery" v-else>
      <div  class="gallery-item" v-for="el, idx in items" :key="idx" @click="selectItem(idx)" >
        <img v-if="el.img" :src="el.img" :alt="el.title + ' image'"  />
        <span v-else>{{el.title}}</span>

      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  name: 'ProjCarousell',
  data () {
    return {
      items: [
        {
          title: 'Wipit Board',
          desc: `
          Application developed by a team of 8 for a real client as Henry's Final Project. Wipit is social network for programmers, by programmers.
          It's a global backlog where anyone can post a task/question and other person can reach to him via live chat and start pair programming.
          Although everyone helped with most functionalities, my biggest contributions were all login/register functionalities,
          user profiling and aunthentication, and the UI.
          `,
          techs: ['Node', 'React', 'Redux', 'Postgres', 'Sequelize', 'ChakraUI', 'Socket.io'],
          img: '/imgs/wipit.png',
          video: 'https://www.youtube.com/embed/CSsvU37NnDw',
          urlText: 'Not open source.'
        },
        {
          title: 'Digital Nomads',
          desc: `
          My very first project deployed on the Solana! 
          It's an image gallery where you can share a cool travel destination through Solana's testnet. Phantom wallet required.
          `,
          techs: ['React', 'Rust', 'Anchor', 'Web3.js'],
          img: '/imgs/digitalnomads.png',
          urlText: 'Github',
          url: 'https://github.com/maxfer03/solana-digital-nomads'

        },
        {
          title: 'Mercado Libre Scraper',
          desc: `
          A web application that scrapes all the results from a specific search in Mercado libre and returns an Excel spreadsheet with price, item title, and item url.
          \nIt started as a small commandline project for a relative, but I quickly realized that a ui-less python project not very user friendly , and quite hard to package for different 
          operative systems. So, I decided to refactor the python code into a flask API and connect it to a simple yet effective client developed with Vue
          `,
          techs: ['Python', 'Flask', 'Vue', 'VuesticUI'],
          img: '',
          urlText: 'Github',
          url: 'https://github.com/maxfer03/ml-scraper'

        },
        // {
        //   title: 'Wave Portal',
        //   desc: `
        //   My very first project deployed on the Ethereum Blockchain!
        //   Here you can send me a message through the Rinkeby testnet using fake ETH (a MetaMask wallet is required).
        //   `,
        //   techs: ['React', 'Solidity', 'Ethers'],
        //   img: '/imgs/waveportal.png',
        //   urlText: 'Github',
        //   url: 'https://github.com/maxfer03/wave-portal-client'

        // },
        {
          title: 'Pokemon Index',
          desc: `
          Fullstack app developed completely on my own with all the different technologies learned throughout the soyHenry Bootcamp.
          The source code is private though, because the students must make it on their own in order to complete the bootcamp.
          `,
          techs: ['Node', 'React', 'Redux', 'Postgres', 'Sequelize'],
          img: '/imgs/pokemons.png',
          video: 'https://www.youtube.com/embed/HWiyshnQN68',
          urlText: 'Not open source.'

        }
      ],
      index: 0,
      mode: false
    }
  },
  computed: {
    totalItems () {
      return this.items.length
    }
  },
  methods: {
    async nextItem () {
      if (this.totalItems - 1 === this.index) {
        this.index = 0
      } else {
        this.index++
      }
    },
    async prevItem () {
      if (this.index === 0) {
        this.index = this.totalItems - 1
      } else {
        this.index--
      }
    },
    selectItem (i) {
      this.index = i
      this.mode = !this.mode
    },
    async switchMode () {
      switch (this.mode) {
        case true:
          await this.modeAnim(true, 'carousell')
          break
        case false:
          await this.modeAnim(true, 'gallery')
          break
      }
      this.mode = !this.mode
    },
    // anims
    async modeAnim (out, container) {
      const tl = gsap.timeline()
      if (out) {
        await tl
          .to('.projects-layout-switcher', {
            pointerEvents: 'none'
          })
          .to(`.${container}`, {
            clipPath: 'inset(100% 0px 0px 0%)'
          }, '<')
      } else {
        await tl
          .from(`.${container}`,
            {
              clipPath: 'inset(0px 0px 100%)'
            }
          )
          .to('.projects-layout-switcher', {
            pointerEvents: 'initial'
          }, '<')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.projects{
  margin-top: 50px;
  &-top{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .carousell{
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
      &-content{
      margin: 0px 20px;
      flex: 1 1 0px;
      img, iframe{
        object-fit: cover;
        object-position: top;
        width: 100%;
        height: 400px;
        border: 1px solid white;
      }
    }
  }
  .gallery{
    display: flex;
    gap: 10px;
    justify-content: space-evenly;
    flex-flow: row wrap;
    margin: 10px 0px;
    &-item{
      display: flex;
      align-items: center;
      img{
      width: 240px;
      height: 135px;
      }
      span{
        text-align: center;
        padding: 0px 10%;
      }
    }
  }
}
</style>
