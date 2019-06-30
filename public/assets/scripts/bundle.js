!function(e){var n={};function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=n,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)a.d(t,i,function(n){return e[n]}.bind(null,i));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/assets",a(a.s=0)}([function(e,n,a){a(2),e.exports=a(1)},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var t;function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}var s,o,r="about",c="academics",l="activities",d=(i(t={},r,'\n    <div class="page page--about" name="about">\n        <div class="card">\n            <h2 class="title card__title card__title--about">About</h2>  \n            <p class="card__body card__body--about">\n                I am a PhD candidate in the department of chemistry at the University of Chicago working with <a\n                href="http://vaikuntanathan-group.uchicago.edu/" target="_blank">Suri Vaikuntanathan</a> (among other\n                things; see <a href="#activities">Activities</a>). I use statistical mechanics to understand how energy\n                consumption shapes the properties of non-equilibrium materials and processes, especially in biophysics.\n                I am originally from Toronto, Canada. Before moving to Chicago I also lived in Montreal and the\n                Netherlands. I speak English and French fluently, and some conversational Dutch. My last name is Spanish\n                and is pronounced "del hoong-ko".\n            </p>\n        </div>\n    </div>\n    '),i(t,c,'\n    <div class="page page--academics" name="academics">\n        <div class="card">\n            <h2 class="title card__title">Academics</h2>\n            <div class="card__section">\n                <h3 class="card__subtitle">Research interests</h3>\n                <p class="card__body card__body--academics">\n                    Using equilibrium statistical mechanics, we can - in principle - derive macroscopic properties of\n                    systems from microscopic interactions. Yet most systems are out of equilibrium, for which no such\n                    principle exists. In particular, evolution has produced many incredible nonequilibrium machines and\n                    materials: from self-healing materials like muscles, to nanoscale factories that underlie gene\n                    expression. Experimentalists can now study these systems with remarkable levels of detail, and are even\n                    able to recreate some of their basic functions in synthetic systems. A rigorous physical understanding\n                    of how these systems convert energy input to function is essential to make useful biomimetic materials\n                    and machines. During my PhD I have studied how energy consumption controls the properties of model\n                    systems inspired by two classes of contemporary experiments.\n                </p>\n                <h4 class="card__subtitle card__subtitle--small">1. Biochemical oscillators</h4>\n                <p class="card__body--academics">\n                    A biochemical oscillator is a series of non-equilibrium chemical and physical processes that underlie\n                    biological clocks such as circadian rhythms. Biochemical oscillators are robust to fluctuations in\n                    chemical counts, inputs such as light levels, and other sources of noise, a highly desirable feature\n                    that is still poorly understood[1-3]. I consider periodic Markov state models of biochemical oscillators\n                    to probe how energy consumption enables this robustness. I obtained analytical expressions for two\n                    measures of their time-keeping ability: the coherence and period of oscillations. These are expected to\n                    depend on all the details of the rates in the model. However, my calculations revealed that most of\n                    these details become irrelevant to these measures when the system is driven strongly out of equilibrium.\n                    Energy consumption thus allows the oscillator\'s function to be robustly maintained and tuned[4].\n                    Moreover, I have shown how we can design the models so that they exhibit "input compensation", the\n                    ability to maintain a constant period when rates are affected by changes in input parameters (preprint\n                    coming soon). Currently, I am generalizing these results to discover the minimal conditions for a\n                    biochemical oscillator to exploit energy consumption to achieve input compensation.\n                </p>\n                <p class="card__body--academics card__body--footnotes">\n                    [1] Paijmans J, Lubensky DK, ten Wolde PR (2017) Period Robustness and Entrainability of the Kai System\n                    to Changing Nucleotide Concentrations. Biophys J 113(1):157–173.\n                </p>\n                <p class="card__body--academics card__body--footnotes">\n                    [2] Lin J, Chew J, Chockanathan U, Rust MJ (2014) Mixtures of opposing phosphorylations within hexamers\n                    precisely time feedback in the cyanobacterial circadian clock. Proc Natl Acad Sci U S A\n                    111(37):E3937-45.\n                </p>\n                <p class="card__body--academics card__body--footnotes">\n                    [3] Johnson CH, Egli M (2014) Metabolic compensation and circadian resilience in prokaryotic\n                    cyanobacteria. Annu Rev Biochem 83:221–47.\n                </p>\n                <p class="card__body--academics card__body--footnotes">\n                    [4] del Junco C, Vaikuntanathan S (2018) High chemical affinity increases the robustness of biochemical\n                    oscillations. <a href="http://arxiv.org/abs/1808.04914"\n                    target="_blank">http://arxiv.org/abs/1808.04914</a>\n                </p>\n                <figure class="figure">\n                    <img class="figure__image" src="../../../public/assets/images/bo-fig.png" alt="bo-fig">\n                    <figcaption class="figure__caption">\n                    (a) Biochemical oscillators undergo limit cycles in a high-dimensional phase space of molecule\n                    counts[1]. (b) I model oscillators by projecting down the average limit cycle on to a Markov state\n                    model. (c) Analytical expressions accurately predict the values of the period and coherence of the\n                    oscillations in models with randomly assigned rates. The derivation predicts that these values are\n                    insensitive to fluctuations in the rates when the driving force is high. Numerics confirm that, as a\n                    consequence, the time scales of oscillators with random rates become more tightly distributed, and\n                    therefore more robust, at high driving. (d) To include fluctuations about the average limit cycle, I\n                    add small secondary cycles to the Markov model. The time scales can also be analytically predicted in\n                    this model. (e) When the rates are correctly tuned in the multicyclic network in (d), the oscillator\n                    can compensate for changes in the driving force and keep a constant period.\n                    </figcaption>\n                </figure>\n                <h4 class="card__subtitle card__subtitle--small">2. Active colloids</h4>\n                <p class="card__body card__body--academics">\n                    This model is inspired by experiments on colloids, which act as a fluid of hard spheres in equilibrium.\n                    When exposed to a rotating magnetic field, however, they spontaneously break symmetry and sort\n                    themselves according to chirality[5]. A whole phase diagram thus emerges from a single point in the\n                    equilibrium phase space. This phenomenology could be exploited to achieve reversible self-assembly\n                    without having to modify the chemistry of the system, if we can understand how driving the system out of\n                    equilibrium modifies the collective properties of the particles. Combining molecular dynamics\n                    simulations with analytical theory, I quantified how the work performed on the system by the driving\n                    forces leads to phase separation[6]. I used an equilibrium framework called capillary wave theory as a\n                    reference to quantify how interfaces in the phase-separated state are modified by driving, revealing\n                    that it can increase the surface tension - a quantity that drives self-assembly - by a factor of two[7].\n                    These results show how energy dissipation can be used to tune the material properties of this system.\n                </p>\n                <p class="card__body--academics card__body--footnotes">\n                    [5] Han M, Yan J, Granick S, Luijten E (2017) Effective temperature concept evaluated in an active\n                    colloid mixture. Proc Natl Acad Sci U S A 114(29):7513–7518.\n                </p>\n                <p class="card__body--academics card__body--footnotes">\n                    [6] del Junco C, Tociu L, Vaikuntanathan S (2018) Energy dissipation and fluctuations in a driven\n                    liquid. Proc Natl Acad Sci U S A 115(14):3569–3574.\n                </p>\n                <p class="card__body--academics card__body--footnotes">\n                    [7] del Junco C, Vaikuntanathan S (2019) Interface height fluctuations and surface tension of driven\n                    liquids with time-dependent dynamics. J Chem Phys 150(9):094708.\n                </p>\n                <figure class="figure">\n                    <img class="figure__image" src="../../../public/assets/images/rb-fig.png" alt="rb-fig">\n                    <figcaption class="figure__caption">\n                    (a) Magnetic colloids separate according to chirality when exposed to a rotating magnetic field[5].\n                    (b) A minimal model of 2D disks with repulsive Weeks-Chandler Andersen (WCA) interactions reproduces\n                    the basic features of the experiment. As the magnitude and period of the rotating driving force is\n                    increased, the colloids phase separate and then undergo a reentrant transition. (c) A whole phase\n                    diagram emerges from a single point in the equilibrium phase space of the particles. The work done on\n                    the red particles by the driving forces changes their diffusion constant, causing the system to\n                    separate in to regions of like-colored particles.\n                    </figcaption>\n                </figure>\n            </div>\n            <div class="card__section">\n                <h3 class="card__subtitle">Publications</h3>\n                <p class="card__body--academics">\n                    del Junco C, Vaikuntanathan S (2018) <cite><a href="https://arxiv.org/abs/1808.04914" target="_blank">High chemical affinity increases the robustness of biochemical oscillations.</a></cite> (under review)\n                </p>\n                <p class="card__body--academics">\n                    del Junco C, Vaikuntanathan S (2019) <cite>Interface height fluctuations and surface tension of driven liquids with time-dependent dynamics. J Chem Phys 150(9):094708.</cite> arXiv JCP \n                    This paper was chosen as an Editor\'s Pick and highlighted in Scilight\n                </p>\n                <p class="card__body--academics">\n                    del Junco C, Tociu L, Vaikuntanathan S (2018) Energy dissipation and fluctuations in a driven liquid. Proc Natl Acad Sci U S A 115(14):3569–3574. arXiv PNAS\n                </p>\n            </div>\n        </div>\n    </div>\n    '),i(t,l,'\n    <div class="page page--activities" name="activities">\n        <div class="card">\n            <h2 class="title card__title">Activities</h2>\n            <div class="card__section">\n                <h3 class="card__subtitle">Organizing</h3>\n                <p class="card__body card__body--activities">\n                    Since 2016 I have been a departmental organizing and later a steward for the union of graduate\n                    workers at the University of Chicago, <a href="http://www.uchicagogsu.org/" target="_blank">GSU</a>.\n                    Most people would acknowledge that there is a detrimental power imbalance between\n                    faculty/administrators and graduate students, that our departments (especially theoretical sciences)\n                    are not diverse enough, that the days of a PhD guaranteeing a secure, well-paying job as a tenured\n                    professor are long gone - yet few are willing to talk about the kind of systemic change that needs\n                    to happen to address these issues. As I see it, unionizing is a way for graduate students to\n                    leverage our position as workers who do teaching and research that is essential to the university\'s\n                    mission in order to effect positive change in the university and surrounding communities. I will\n                    stop there as many people have written more eloquently and at length on why grad students should\n                    unionize[1], but I am always happy to discuss this if you see me.\n                </p>\n                <p class="card__body card__body--activities">\n                    Most recently, I was proud to take part in an industrial action with my colleagues where we <a\n                        href="https://www.chicagomaroon.com/article/2019/6/4/gsu-strike-day-one/"\n                        target="_blank">picketed</a> the University of Chicago for 3 days in June 2019 with broad\n                    support from undergraduates, alumni, faculty, other labor unions, politicians, and community\n                    members, in order to pressure the administration to meet their ethical obligation to recognize our\n                    union.\n                </p>\n                <p class="card__body card__body--activities">\n                    In my capacity as an organizer, I have been invited to speak by grad workers at the University of\n                    Chicago, Northwestern, and Stanford; organized events, facilitated meetings, and most importantly,\n                    had hundreds of individual conversations with my peers.\n                </p>\n            </div>\n            <div class="card__section">\n                <h3 class="card__subtitle">Techno</h3>\n                <p class="card__body card__body--activities">\n                    In my limited remaining free time, I am a techno enthusiastic, aka raver. Mostly this interest does\n                    not result in productive output, which is part of what I like about it, but in 2016 I contributed to\n                    the <a href="https://drive.google.com/file/d/1H56d-XSiynLJ5BHaB8-UkzSKmLn67T0D/view"\n                        target="_blank">Rave Ethics</a> zine (email me if you can guess what my contribution was).\n                    Although the website you\'re on now was built by my friend and fellow techno enthusiast <a\n                        href="https://www.hanna-jones.com/about" target="_blank">Hanna Jones</a>, I made the website and\n                    was involved in developing the mission and first release of <a href="http://futureethics.net/"\n                        target="_blank">Rave Ethics</a> offshoot label Future Ethics, run by <a\n                        href="https://twitter.com/ursulaxanadu?lang=en" target="_blank">Ursula Xanadu</a> and <a\n                        href="https://www.instagram.com/beethrilll/" target="_blank">Bee Hill</a>.\n                </p>\n            </div>\n        </div>\n    </div>\n    '),t),h=function(e){var n=window.location.hash.slice(1).toLocaleLowerCase()||"/";e.innerHTML=d[n]||d[r]};s=document.getElementById("main"),o=function(){return h(s)},window.addEventListener("hashchange",o),window.addEventListener("load",o),console.log("hello github")}]);