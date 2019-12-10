<template>
  <div class="about">
    <heading />
    <h1>O nás</h1>
    <profile title="O hře"
             text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Imperdiet massa tincidunt nunc pulvinar. Tincidunt nunc pulvinar sapien et ligula.
             Tempus iaculis urna id volutpat lacus laoreet non. Sit amet consectetur adipiscing elit ut
             aliquam purus sit. Nec feugiat nisl pretium fusce. Leo urna molestie at elementum eu. Faucibus
             vitae aliquet nec ullamcorper sit amet risus nullam. Varius duis at consectetur lorem donec massa
             sapien faucibus. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Id velit
             ut tortor pretium viverra suspendisse. Ut sem nulla pharetra diam sit. Cursus vitae congue mauris
             rhoncus aenean vel elit. Massa enim nec dui nunc mattis enim ut."
             image="Charac_F-F2-idle_0.png"
    />
    <profile title="Bětka"
             class="change"
             text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Imperdiet massa tincidunt nunc pulvinar. Tincidunt nunc pulvinar sapien et ligula.
             Tempus iaculis urna id volutpat lacus laoreet non. Sit amet consectetur adipiscing elit ut
             aliquam purus sit. Nec feugiat nisl pretium fusce. Leo urna molestie at elementum eu. Faucibus
             vitae aliquet nec ullamcorper sit amet risus nullam. Varius duis at consectetur lorem donec massa
             sapien faucibus. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Id velit
             ut tortor pretium viverra suspendisse. Ut sem nulla pharetra diam sit. Cursus vitae congue mauris
             rhoncus aenean vel elit. Massa enim nec dui nunc mattis enim ut."
             image="DSC_2372.jpg"
    />
    <profile title="Katka"
             text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Imperdiet massa tincidunt nunc pulvinar. Tincidunt nunc pulvinar sapien et ligula.
             Tempus iaculis urna id volutpat lacus laoreet non. Sit amet consectetur adipiscing elit ut
             aliquam purus sit. Nec feugiat nisl pretium fusce. Leo urna molestie at elementum eu. Faucibus
             vitae aliquet nec ullamcorper sit amet risus nullam. Varius duis at consectetur lorem donec massa
             sapien faucibus. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Id velit
             ut tortor pretium viverra suspendisse. Ut sem nulla pharetra diam sit. Cursus vitae congue mauris
             rhoncus aenean vel elit. Massa enim nec dui nunc mattis enim ut."
    />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Profile from '../components/Profile.vue'
export default {
  components: {
    heading: Header,
    profile: Profile
  }
}
</script>
<style>
.change {
    flex-direction: column-reverse;
    background-color: rgb(230, 255, 248);
}
</style>
