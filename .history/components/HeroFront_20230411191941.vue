<template>
    <section class="HeroFront">
        <div class="container">
            <div class="row">
                <div class="reveal">
                    <div class="h1 primary">J<span>e</span>an-M<span>a</span>rc</div>
                </div>
                <div class="reveal">
                    <div class="h1 primary">To<span>u</span>l<span>ou</span>se</div>
                </div>
            </div>
            
            <div class="hr"></div>
            
            <div class="row intro">
                <div class="p">front-end developer</div>
                <div class="p">available for freelance</div>
                <div class="p">email</div>
                <div class="p">toulouse, france</div>
            </div>
            
            <div class="white-space"></div>
            
            <div class="row">
                <div class="nav-item about">
                    <div>About</div>
                    <div class="id">01</div>
                </div>
                
                <div class="reveal">
                    <div class="h1 secondary">French</div>
                </div>
                
                <div class="nav-item projects">
                    <div>Projects</div>
                    <div class="id">02</div>
                </div>
            </div>
            
            <div class="hr"></div>
            
            <div class="row">
                <div class="reveal">
                    <div class="h1 secondary">Frontend</div>
                </div>
                <div class="reveal">
                    <div class="h1 secondary">Developer &nbsp;&nbsp;</div>
                </div>
            </div>
            
            <div class="hr"></div>
            
            <div class="row">
                <div class="reveal">
                    <div class="h1 secondary">Based</div>
                </div>
            </div>
            
            <div class="nav-item contact">
                <div>Contact</div>
                <div class="id">03</div>
            </div>
            
            <div class="reveal">
                <div class="h1 secondary">in Toulouse</div>
            </div>
            
            <div class="hr"></div>
            
        </div>
    </section>
</template>

<style lang="scss">
.HeroFront {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: var(--grey);
    
    .container {
        width: 100%;
        height: 100vh;
        padding: 2em;
    }
    .row { display: flex; justify-content: space-between; }
    .hr { width: 100%; height: 1px; background: var(--black);}
    .reveal {
        width: 500px;
        height: 140px;
        position: relative;
        overflow: hidden;
    }
    .reveal div { position: absolute; line-height: 1.8em; }
    .h1 { font-size: 6.4em; font-weight: 400; letter-spacing: -0.2em }
    .h1 span { font-style: italic; }
    .secondary { font-family: 'PP Neue Montreal'; }
    p {
        padding: 0.8em;
        font-family: 'PP Neue Montreal';
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
    }
    .white-space { width: 100; height: 120px;}
    .nav-item {
        width: 240px;
        border-radius: 0 0 40px 0;
        margin: 0.6em;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
    .nav-item > div {
        padding: 1em;
        font-family: 'PP Neue Montreal'; 
        font-size: 14px;
    }
    .about { background: #fcefdf; }
    .projects { background: #db4c44; }
    .project > div { background: #fff; }
    .contact { background: #e7a92b; }
    .id { margin-right: 0.8em; }
}
</style>