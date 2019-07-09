<script>
  import Code from '../../common/CodeBlock.svelte'
  import Image from '../../Image.svelte'
  export let code = `
    <script\>
      import { Image } from 'cl-svelte-ui'
    </script\>
    <style>
      .wrapper {
        display: flex;
      }
      .image-container {
        height: 300px;
        margin-right: 20px;
      }
    </style>
    <div class='wrapper'>
      <div class='image-container'>
        <Image src='/images/1.jpg' alt='image' fixedHeight={true} />
      </div>
      <div class='image-container'>
        <Image src='/images/2.jpg' alt='image' fixedHeight={true} />
      </div>
      <div class='image-container'>
        <Image src='/images/3.jpg' alt='image' fixedHeight={true} />
      </div>
    </div>
  `
</script>

<style>
  .wrapper {
    display: flex;
  }
  .image-container {
    height: 300px;
    margin-right: 20px;
  }
</style>

<div class='wrapper'>
  <div class='image-container'>
    <Image src='/images/1.jpg' alt='image' fixedHeight={true} />
  </div>
  <div class='image-container'>
    <Image src='/images/2.jpg' alt='image' fixedHeight={true} />
  </div>
  <div class='image-container'>
    <Image src='/images/3.jpg' alt='image' fixedHeight={true} />
  </div>
</div>
<Code>{code}</Code>

