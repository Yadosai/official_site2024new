<template>
    <div id="aboutEyeCatch">
        <p>やどかり祭とは？</p>
        <div class="content">
            <img src="~/assets/img/about/about.png">
            <p>　筑波大学には、全国どころか世界中から学生が集まってきます。 そしてここ、つくばの地に多くの学生がやどを借ります。<br>　やどかり祭は「宿舎祭」と名がついていますが、宿舎入居者のみならず、新一年生を中心とした多くの学生によってつくられる祭りです。<br>　新しく集まってきた新入生に交流の場を設け、仲を深めてもらうために、日頃お世話になっている地元の方々に楽しんでいただき、たくましい筑波生の姿を目にしてもらうために、私たちはこの祭を大切に、華やかに作っています。<br>　また、学生だけの力ではなく、本当に沢山の方の力がこの祭を支えてくれています。祭を作るまでに生まれるさまざまな交流も、この祭の大きな意義だと感じます。
            </p>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
#aboutEyeCatch {
    display: flex;
    padding: 25px;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    align-self: stretch;
    background: #CBCBCB;
}

#aboutEyeCatch p {
    color: #000;
    font-family: "Kaisei HarunoUmi";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
}

#aboutEyeCatch .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
}

#aboutEyeCatch .content img {
    width: 70%;
    height: auto;
}

#aboutEyeCatch .content p {
    align-self: stretch;
    color: #000;
    font-family: "Kaisei HarunoUmi";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

@media (min-width: 950px) {
    #aboutEyeCatch p {
        font-size: 40px;
    }

    #aboutEyeCatch .content img {
        width: 650px;
        height: auto;
    }
}
</style>