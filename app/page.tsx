import { Fragment, type ReactNode } from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa6";
import { SiGooglescholar, SiXiaohongshu } from "react-icons/si";
import AbstractDisclosure from "./AbstractDisclosure";
import CitationMenu from "./CitationMenu";
import LikeButton from "./LikeButton";
import ProfilePhoto from "./ProfilePhoto";
import ShareButton from "./ShareButton";
import RoamingCat from "./RoamingCat";

type Publication = {
  id: string;
  badge: string;
  badgeColor: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  imageFit?: "contain";
  title: string;
  authors: ReactNode;
  venue: string;
  note?: string;
  abstract?: string;
  citation: string;
  bibtex: string;
  links: [{ label: string; href: string }, ...{ label: string; href: string }[]];
};

// Include only public arXiv or publisher records. Lead with first-author papers,
// then DM0, then collaborations ordered by author position and recency.
const publicationGroups: { id: string; title: string; papers: Publication[] }[] = [
  {
    id: "first-author-papers",
    title: "First-author Papers",
    papers: [
      {
        id: "restacvla",
        badge: "IROS 2026",
        badgeColor: "#00369f",
        image: "/restacvla-architecture.webp",
        imageWidth: 1504,
        imageHeight: 678,
        imageAlt: "ResTacVLA paper Figure 2: residual tactile representation learning and surprise-aware tactile policy learning",
        title:
          "Feeling the Unexpected: ResTacVLA for Contact-Rich Manipulation via Residual Tactile Representation",
        authors: (
          <>
            <strong>Pengwei Zhang</strong>, Bin Xie, Xinpan Meng, Xinyu Guo, Ce
            Hao, Fang Deng, Long Cheng, and Tiancai Wang
          </>
        ),
        venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2026",
        note: "Accepted",
        abstract:
          "ResTacVLA reformulates touch as the residual between visual expectation and physical sensation. Predictive-coding-inspired contact primitives and a surprise-aware gate help VLA policies prioritize tactile information during visually ambiguous contact phases.",
        citation:
          'Pengwei Zhang, Bin Xie, Xinpan Meng, Xinyu Guo, Ce Hao, Fang Deng, Long Cheng, and Tiancai Wang. "Feeling the Unexpected: ResTacVLA for Contact-Rich Manipulation via Residual Tactile Representation." IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2026.',
        bibtex: `@inproceedings{zhang2026restacvla,
  title={Feeling the Unexpected: ResTacVLA for Contact-Rich Manipulation via Residual Tactile Representation},
  author={Zhang, Pengwei and Xie, Bin and Meng, Xinpan and Guo, Xinyu and Hao, Ce and Deng, Fang and Cheng, Long and Wang, Tiancai},
  booktitle={IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
  year={2026}
}`,
        links: [
          { label: "Paper", href: "https://arxiv.org/abs/2607.03387" },
          { label: "Project", href: "https://awilekong.github.io/ResTacVLA/" },
          { label: "BibTeX", href: "https://arxiv.org/bibtex/2607.03387" },
        ],
      },
      {
        id: "rehabilitation-assessment",
        badge: "SCTS 2026",
        badgeColor: "#00629b",
        image: "/rehab-system.webp",
        imageWidth: 520,
        imageHeight: 326,
        imageAlt: "Rehabilitation assessment paper Figure 2(a): the depth camera and software used in the assessment system",
        title:
          "A Fine-Grained, Comprehensive, and Quantitative Rehabilitation Assessment System Based on Depth Camera",
        authors: (
          <>
            <strong>Pengwei Zhang</strong>, Long Cheng, and Yongxiang Zou
          </>
        ),
        venue: "SCIENCE CHINA Technological Sciences, 2026",
        abstract:
          "This work combines depth-camera motion capture with YOLOv8-Pose and an interpretable Trajectory-ROM-Smooth scoring algorithm. Evaluation with 21 stroke patients shows close agreement with experienced physicians while capturing subtle rehabilitation progress at a finer granularity.",
        citation:
          'Pengwei Zhang, Long Cheng, and Yongxiang Zou. "A Fine-Grained, Comprehensive, and Quantitative Rehabilitation Assessment System Based on Depth Camera." SCIENCE CHINA Technological Sciences, 2026. https://doi.org/10.1007/s11431-026-3364-3.',
        bibtex: `@article{zhang2026rehabilitation,
  title={A Fine-Grained, Comprehensive, and Quantitative Rehabilitation Assessment System Based on Depth Camera},
  author={Zhang, Pengwei and Cheng, Long and Zou, Yongxiang},
  journal={SCIENCE CHINA Technological Sciences},
  year={2026},
  doi={10.1007/s11431-026-3364-3}
}`,
        links: [
          {
            label: "Paper",
            href: "https://www.sciengine.com/SCTS/doi/10.1007/s11431-026-3364-3",
          },
          {
            label: "DOI",
            href: "https://doi.org/10.1007/s11431-026-3364-3",
          },
        ],
      },
      {
        id: "binocular-stereo-ranging",
        badge: "ICMSP 2023",
        badgeColor: "#00629b",
        image: "/binocular-ranging.svg",
        imageWidth: 1200,
        imageHeight: 440,
        imageAlt: "Method schematic: improved YOLOv5s with ECA attention and SGBM stereo matching for target ranging; not an experimental image",
        imageFit: "contain",
        title: "Research on Binocular Stereo Vision Ranging Based on Improved YOLOv5s",
        authors: (
          <>
            <strong>Pengwei Zhang</strong> and Zhenyu Liu
          </>
        ),
        venue: "5th International Conference on Intelligent Control, Measurement and Signal Processing (ICMSP), pp. 1242–1246, 2023",
        abstract:
          "This work combines an improved YOLOv5s detector with binocular stereo vision for target ranging. ECA attention enhances detection, while SGBM stereo matching supplies disparity information to estimate the distance of detected objects for low-cost, non-contact measurement.",
        citation:
          'Pengwei Zhang and Zhenyu Liu. "Research on Binocular Stereo Vision Ranging Based on Improved YOLOv5s." 2023 5th International Conference on Intelligent Control, Measurement and Signal Processing (ICMSP), pp. 1242–1246, 2023. https://doi.org/10.1109/ICMSP58539.2023.10170936.',
        bibtex: `@inproceedings{zhang2023binocular,
  title={Research on Binocular Stereo Vision Ranging Based on Improved {YOLOv5s}},
  author={Zhang, Pengwei and Liu, Zhenyu},
  booktitle={2023 5th International Conference on Intelligent Control, Measurement and Signal Processing (ICMSP)},
  pages={1242--1246},
  year={2023},
  publisher={IEEE},
  doi={10.1109/ICMSP58539.2023.10170936},
  url={https://doi.org/10.1109/ICMSP58539.2023.10170936}
}`,
        links: [
          { label: "Paper", href: "https://ieeexplore.ieee.org/document/10170936/" },
          { label: "DOI", href: "https://doi.org/10.1109/ICMSP58539.2023.10170936" },
        ],
      },
    ],
  },
  {
    id: "technical-reports",
    title: "Technical Report",
    papers: [
      {
        id: "dm0",
        badge: "Technical Report",
        badgeColor: "#64748b",
        image: "/dm0.webp",
        imageWidth: 1600,
        imageHeight: 528,
        imageAlt: "DM0 architecture connecting a vision-language backbone with a flow-matching action expert",
        title:
          "DM0: An Embodied-Native Vision-Language-Action Model towards Physical AI",
        authors: (
          <>
            En Yu, Haoran Lv, Jianjian Sun, …, <strong>Pengwei Zhang</strong>,
            …, Tiancai Wang
          </>
        ),
        venue: "Technical report · arXiv:2602.14974, 2026",
        abstract:
          "DM0 unifies robotic manipulation and navigation through joint learning from web, autonomous driving, and embodied data. A vision-language backbone, flow-matching action expert, and spatial reasoning strategy connect semantic understanding with continuous robot control.",
        citation:
          'En Yu, Haoran Lv, Jianjian Sun, Kangheng Lin, Ruitao Zhang, Yukang Shi, Yuyang Chen, Ze Chen, Ziheng Zhang, Fan Jia, Kaixin Liu, Meng Zhang, Ruitao Hao, Saike Huang, Songhan Xie, Yu Liu, Zhao Wu, Bin Xie, Pengwei Zhang, Qi Yang, Xianchi Deng, Yunfei Wei, Enwen Zhang, Hongyang Peng, Jie Zhao, Kai Liu, Wei Sun, Yajun Wei, Yi Yang, Yunqiao Zhang, Ziwei Yan, Haitao Yang, Hao Liu, Haoqiang Fan, Haowei Zhang, Junwen Huang, Yang Chen, Yunchao Ma, Yunhuan Yang, Zhengyuan Du, Ziming Liu, Jiahui Niu, Yucheng Zhao, Daxin Jiang, Wenbin Tang, Xiangyu Zhang, Zheng Ge, Erjin Zhou, and Tiancai Wang. "DM0: An Embodied-Native Vision-Language-Action Model towards Physical AI." Technical report, arXiv:2602.14974, 2026. https://arxiv.org/abs/2602.14974.',
        bibtex: `@misc{yu2026dm0,
  title={DM0: An Embodied-Native Vision-Language-Action Model towards Physical AI},
  author={Yu, En and Lv, Haoran and Sun, Jianjian and Lin, Kangheng and Zhang, Ruitao and Shi, Yukang and Chen, Yuyang and Chen, Ze and Zhang, Ziheng and Jia, Fan and Liu, Kaixin and Zhang, Meng and Hao, Ruitao and Huang, Saike and Xie, Songhan and Liu, Yu and Wu, Zhao and Xie, Bin and Zhang, Pengwei and Yang, Qi and Deng, Xianchi and Wei, Yunfei and Zhang, Enwen and Peng, Hongyang and Zhao, Jie and Liu, Kai and Sun, Wei and Wei, Yajun and Yang, Yi and Zhang, Yunqiao and Yan, Ziwei and Yang, Haitao and Liu, Hao and Fan, Haoqiang and Zhang, Haowei and Huang, Junwen and Chen, Yang and Ma, Yunchao and Yang, Yunhuan and Du, Zhengyuan and Liu, Ziming and Niu, Jiahui and Zhao, Yucheng and Jiang, Daxin and Tang, Wenbin and Zhang, Xiangyu and Ge, Zheng and Zhou, Erjin and Wang, Tiancai},
  year={2026},
  note={Technical report},
  eprint={2602.14974},
  archivePrefix={arXiv},
  primaryClass={cs.RO},
  url={https://arxiv.org/abs/2602.14974}
}`,
        links: [
          { label: "Paper", href: "https://arxiv.org/abs/2602.14974" },
          { label: "Code", href: "https://github.com/Dexmal/dexbotic" },
          { label: "BibTeX", href: "https://arxiv.org/bibtex/2602.14974" },
        ],
      },
    ],
  },
  {
    id: "co-authored-papers",
    title: "Co-authored Papers",
    papers: [
      {
        id: "touchthinker",
        badge: "EMNLP 2026",
        badgeColor: "#7253a2",
        image: "/touchthinker-framework.webp",
        imageWidth: 971,
        imageHeight: 349,
        imageAlt: "TouchThinker paper Figure 3: action-aware tactile modeling and the two-stage training pipeline",
        title:
          "TouchThinker: Scaling Tactile Commonsense Reasoning to the Open World with Large-scale Data and Action-aware Representation",
        authors: (
          <>
            Kailin Lyu, Di Wu, <strong>Pengwei Zhang</strong>, Yuhang Zheng,
            Yingxin Lai, Long Xiao, Kangyi Wu, Pengna Li, Chen Gao, Lianyu Hu,
            Xiaobin Hu, Jie Hao, Ce Hao, Weihao Yuan, and Shuicheng Yan
          </>
        ),
        venue: "Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing (EMNLP)",
        abstract:
          "TouchThinker introduces a million-scale tactile reasoning dataset spanning 410 objects, eight scenarios, and seven sensor types. Its action-aware representation focuses reasoning on informative interaction segments and improves open-world tactile commonsense reasoning.",
        citation:
          'Kailin Lyu, Di Wu, Pengwei Zhang, Yuhang Zheng, Yingxin Lai, Long Xiao, Kangyi Wu, Pengna Li, Chen Gao, Lianyu Hu, Xiaobin Hu, Jie Hao, Ce Hao, Weihao Yuan, and Shuicheng Yan. "TouchThinker: Scaling Tactile Commonsense Reasoning to the Open World with Large-scale Data and Action-aware Representation." Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing, pages 43841–43858. Association for Computational Linguistics, 2026. https://doi.org/10.18653/2026.emnlp-main.1925.',
        bibtex: `@inproceedings{lyu-etal-2026-touchthinker,
  title={{T}ouch{T}hinker: Scaling Tactile Commonsense Reasoning to the Open World with Large-scale Data and Action-aware Representation},
  author={Lyu, Kailin and Wu, Di and Zhang, Pengwei and Zheng, Yuhang and Lai, Yingxin and Xiao, Long and Wu, Kangyi and Li, Pengna and Gao, Chen and Hu, Lianyu and Hu, Xiaobin and Hao, Jie and Hao, Ce and Yuan, Weihao and Yan, Shuicheng},
  booktitle={Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing},
  month=oct,
  year={2026},
  address={Budapest, Hungary},
  publisher={Association for Computational Linguistics},
  pages={43841--43858},
  url={https://aclanthology.org/2026.emnlp-main.1925/},
  doi={10.18653/2026.emnlp-main.1925}
}`,
        links: [
          {
            label: "Paper",
            href: "https://aclanthology.org/2026.emnlp-main.1925/",
          },
          { label: "arXiv", href: "https://arxiv.org/abs/2606.11637" },
          {
            label: "Code",
            href: "https://github.com/lvkailin0118/TouchThinker",
          },
          {
            label: "BibTeX",
            href: "https://aclanthology.org/2026.emnlp-main.1925.bib",
          },
        ],
      },
      {
        id: "monocular-depth-ranging",
        badge: "ICCE-Taiwan 2023",
        badgeColor: "#00629b",
        image: "/monocular-experiment.webp",
        imageWidth: 520,
        imageHeight: 211,
        imageAlt: "Monocular depth ranging paper Figure 4: real-time depth estimation on a Wheeltec robot car, without and with obstacles",
        imageFit: "contain",
        title: "Customized Training and Application of Monocular Depth Ranging for Assisted Driving",
        authors: (
          <>
            Jingwen Li, Chuhan Wang, <strong>Pengwei Zhang</strong>, Ruipeng Gao,
            and Dan Tao
          </>
        ),
        venue: "International Conference on Consumer Electronics – Taiwan (ICCE-Taiwan), pp. 391–392, 2023",
        abstract:
          "This work integrates monocular depth estimation with a Jetson Nano-based robot car. A depth model fine-tuned on KITTI converts camera images into depth maps, with experiments evaluating the combined hardware and software system for assisted driving.",
        citation:
          'Jingwen Li, Chuhan Wang, Pengwei Zhang, Ruipeng Gao, and Dan Tao. "Customized Training and Application of Monocular Depth Ranging for Assisted Driving." 2023 International Conference on Consumer Electronics - Taiwan (ICCE-Taiwan), pp. 391–392, 2023. https://doi.org/10.1109/ICCE-Taiwan58799.2023.10226619.',
        bibtex: `@inproceedings{li2023monocular,
  title={Customized Training and Application of Monocular Depth Ranging for Assisted Driving},
  author={Li, Jingwen and Wang, Chuhan and Zhang, Pengwei and Gao, Ruipeng and Tao, Dan},
  booktitle={2023 International Conference on Consumer Electronics - Taiwan (ICCE-Taiwan)},
  pages={391--392},
  year={2023},
  doi={10.1109/ICCE-Taiwan58799.2023.10226619},
  url={https://doi.org/10.1109/ICCE-Taiwan58799.2023.10226619}
}`,
        links: [
          { label: "Paper", href: "https://ieeexplore.ieee.org/document/10226619/" },
          { label: "DOI", href: "https://doi.org/10.1109/ICCE-Taiwan58799.2023.10226619" },
        ],
      },
      {
        id: "mipd",
        badge: "T-ITS 2025",
        badgeColor: "#00629b",
        image: "/mipd.webp",
        imageWidth: 1400,
        imageHeight: 716,
        imageAlt: "MIPD multi-sensor vehicle platform and sensor observations",
        title:
          "MIPD: A Multi-Sensory Interactive Perception Dataset for Embodied Intelligent Driving",
        authors: (
          <>
            Zhiwei Li, Tingzhen Zhang, Meihua Zhou, Dandan Tang,{" "}
            <strong>Pengwei Zhang</strong>, Wenzhuo Liu, Qiaoning Yang, Tianyu
            Shen, Kunfeng Wang, and Huaping Liu
          </>
        ),
        venue: "IEEE Transactions on Intelligent Transportation Systems, 26(11): 21320–21334, 2025",
        abstract:
          "MIPD combines camera, LiDAR, and 4D radar observations with sound, light intensity, vibration, and vehicle speed for embodied driving perception. The dataset contains 126 sequences and more than 8,500 synchronized, annotated frames covering challenging road and lighting conditions.",
        citation:
          'Zhiwei Li, Tingzhen Zhang, Meihua Zhou, Dandan Tang, Pengwei Zhang, Wenzhuo Liu, Qiaoning Yang, Tianyu Shen, Kunfeng Wang, and Huaping Liu. "MIPD: A Multi-Sensory Interactive Perception Dataset for Embodied Intelligent Driving." IEEE Transactions on Intelligent Transportation Systems, vol. 26, no. 11, pp. 21320–21334, 2025. https://doi.org/10.1109/TITS.2025.3593298.',
        bibtex: `@article{li2025mipd,
  title={{MIPD}: A Multi-Sensory Interactive Perception Dataset for Embodied Intelligent Driving},
  author={Li, Zhiwei and Zhang, Tingzhen and Zhou, Meihua and Tang, Dandan and Zhang, Pengwei and Liu, Wenzhuo and Yang, Qiaoning and Shen, Tianyu and Wang, Kunfeng and Liu, Huaping},
  journal={IEEE Transactions on Intelligent Transportation Systems},
  volume={26},
  number={11},
  pages={21320--21334},
  year={2025},
  doi={10.1109/TITS.2025.3593298},
  url={https://doi.org/10.1109/TITS.2025.3593298}
}`,
        links: [
          { label: "Paper", href: "https://ieeexplore.ieee.org/document/11112801/" },
          { label: "arXiv", href: "https://arxiv.org/abs/2411.05881" },
          { label: "Code", href: "https://github.com/BUCT-IUSRC/Dataset__MIPD" },
          { label: "DOI", href: "https://doi.org/10.1109/TITS.2025.3593298" },
        ],
      },
    ],
  },
];

const news = [
  {
    date: "Oct 2026",
    dateTime: "2026-10",
    content: (
      <>
        <a
          href="https://aclanthology.org/2026.emnlp-main.1925/"
          target="_blank"
          rel="noreferrer"
          data-analytics-event="news-touchthinker-emnlp"
        >
          TouchThinker
        </a>{" "}
        was published in the proceedings of EMNLP 2026.
      </>
    ),
  },
  {
    date: "Sep 2026",
    dateTime: "2026-09-10",
    content: (
      <>
        <a
          href="https://spectrum.ieee.org/tactile-data-robots"
          target="_blank"
          rel="noreferrer"
          data-analytics-event="news-restacvla-ieee-spectrum"
        >
          IEEE Spectrum
        </a>{" "}
        featured ResTacVLA in “Robots Are Learning to Feel,” highlighting our
        surprise-aware approach to tactile intelligence for contact-rich
        manipulation.
      </>
    ),
  },
  {
    date: "Jul 2026",
    dateTime: "2026-07-29",
    content: (
      <>
        <a
          href="https://mp.weixin.qq.com/s/Q_Q9xwdPnEaffNV-SNBlyQ"
          target="_blank"
          rel="noreferrer"
          data-analytics-event="news-restacvla-zgca-feature"
        >
          Beijing Zhongguancun Academy
        </a>{" "}
        spotlighted our ResTacVLA work in an official feature on frontier
        advances in vision–tactile embodied intelligence.
      </>
    ),
  },
  {
    date: "Jul 2026",
    dateTime: "2026-07",
    content: (
      <>
        <a
          href="https://arxiv.org/abs/2607.03387"
          target="_blank"
          rel="noreferrer"
          data-analytics-event="news-restacvla"
        >
          ResTacVLA
        </a>{" "}
        was accepted to IROS 2026.
      </>
    ),
  },
  {
    date: "Jun 2026",
    dateTime: "2026-06",
    content: (
      <>
        Third Prize at the ManiSkill-ViTac 2026 Challenge at CVPR 2026.
      </>
    ),
  },
  {
    date: "May 2026",
    dateTime: "2026-05",
    content: (
      <>
        Our rehabilitation assessment work was published in{" "}
        <a
          href="https://doi.org/10.1007/s11431-026-3364-3"
          target="_blank"
          rel="noreferrer"
          data-analytics-event="news-rehabilitation-assessment"
        >
          SCIENCE CHINA Technological Sciences
        </a>
        .
      </>
    ),
  },
];

function PublicationCard({
  publication,
  revealDelay = 0,
}: {
  publication: Publication;
  revealDelay?: number;
}) {
  return (
    <li
      className="publication-card"
      data-reveal="up"
      data-reveal-delay={revealDelay}
    >
      <div className={`publication-row${publication.image ? "" : " publication-row-text"}`}>
        <div className="publication-preview">
          <a
            className="venue-badge"
            href={publication.links[0].href}
            style={{ backgroundColor: publication.badgeColor }}
            target="_blank"
            rel="noreferrer"
            data-analytics-event={`${publication.id}-badge`}
          >
            {publication.badge}
          </a>
          {publication.image ? <a
            className="publication-image-link"
            href={publication.links[0].href}
            target="_blank"
            rel="noreferrer"
            data-analytics-event={`${publication.id}-thumbnail`}
          >
            <img
              className={publication.imageFit === "contain" ? "publication-image-contain" : undefined}
              src={publication.image}
              alt={publication.imageAlt}
              width={publication.imageWidth}
              height={publication.imageHeight}
              loading="lazy"
              decoding="async"
            />
          </a> : null}
        </div>

        <div className="publication-details">
          <h4>{publication.title}</h4>
          <p className="authors">{publication.authors}</p>
          <p className="periodical">
            <em>{publication.venue}</em>
          </p>
          {"note" in publication && publication.note ? (
            <p className="periodical">{publication.note}</p>
          ) : null}
          <div className="paper-links">
            {publication.abstract ? <AbstractDisclosure
              text={publication.abstract}
              publicationId={publication.id}
            /> : null}
            {publication.links.map((link) => (
              <a
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noreferrer"
                data-analytics-event={`${publication.id}-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
            <CitationMenu
              bibtex={publication.bibtex}
              citation={publication.citation}
              publicationId={publication.id}
            />
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Home() {
  return (
    <main className="page-shell" id="about">
      <a className="skip-link" href="#publications">
        Skip to publications
      </a>

      <article className="about-page">
        <header className="profile-header" data-reveal="up">
          <h1>
            <span>
              <strong>Pengwei</strong> Zhang
            </span>
            <span className="chinese-name" lang="zh-CN">
              张鹏伟
            </span>
          </h1>
          <p>
            Ph.D. Student · Robot Learning &amp; Tactile Intelligence ·{" "}
            <a href="https://ia.cas.cn/" target="_blank" rel="noreferrer">
              CASIA
            </a>
          </p>
        </header>

        <div className="profile-overview">
          <ProfilePhoto />

          <div className="about-intro" data-reveal="up">
            <p>
              I am <strong>Pengwei Zhang (张鹏伟)</strong>, a Ph.D. student at the
              Institute of Automation, Chinese Academy of Sciences (
              <a href="https://ia.cas.cn/" target="_blank" rel="noreferrer">
                CASIA
              </a>
              ). I am fortunate to be supervised by{" "}
              <a
                href="https://people.ucas.ac.cn/~chenglong"
                target="_blank"
                rel="noreferrer"
              >
                Prof. Long Cheng
              </a>
              .
            </p>
            <p>
              I received my Bachelor&apos;s degree in Automation from{" "}
              <a
                href="https://en.bjtu.edu.cn/"
                target="_blank"
                rel="noreferrer"
              >
                Beijing Jiaotong University
              </a>
              . I am also a joint-training student at Zhongguancun Academy (
              <a
                href="https://www.bza.edu.cn/en"
                target="_blank"
                rel="noreferrer"
              >
                ZGCA
              </a>
              ), working with{" "}
              <a
                href="https://cehao1.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                Prof. Ce Hao
              </a>
              .
            </p>
            <p>
              My research focuses on building{" "}
              <strong>
                tactile-aware learning systems for reliable real-world robotic
                interaction
              </strong>
              , with particular interests in contact-rich manipulation,
              vision-tactile multimodal learning, force-aware imitation
              learning, and precision assembly.
            </p>

            <p className="intro-contact">
              <strong>Email</strong>
              <a href="mailto:zhangpengwei2024@ia.ac.cn">
                zhangpengwei2024@ia.ac.cn
              </a>
              <span aria-hidden="true">/</span>
              <a href="mailto:pweiii@163.com">pweiii@163.com</a>
            </p>

            <div className="research-tags" aria-label="Research interests">
              <span>Contact-Rich Manipulation</span>
              <span>Vision-Tactile Learning</span>
              <span>Embodied Intelligence</span>
            </div>
          </div>
        </div>

        <section
          className="home-section news-section"
          id="news"
          aria-labelledby="news-title"
        >
          <div className="section-heading compact-heading" data-reveal="up">
            <div>
              <p className="section-kicker">Updates</p>
              <h2 id="news-title">News</h2>
            </div>
          </div>
          <ul className="news-list">
            {news.map((item, index) => (
              <li
                key={`${item.date}-${index}`}
                data-reveal="up"
                data-reveal-delay={index}
              >
                <time dateTime={item.dateTime}>{item.date}</time>
                <span>{item.content}</span>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="home-section selected-publications"
          id="publications"
          aria-labelledby="selected-publications-title"
        >
          <div className="section-heading" data-reveal="up">
            <div>
              <p className="section-kicker">Research</p>
              <h2 id="selected-publications-title">Selected Publications</h2>
            </div>
          </div>

          {publicationGroups.map((group) => (
            <Fragment key={group.id}>
              <div className="publication-group-heading" data-reveal="up">
                <h3 id={group.id}>{group.title}</h3>
              </div>
              <ol className="bibliography" aria-labelledby={group.id}>
                {group.papers.map((publication, index) => (
                  <PublicationCard
                    publication={publication}
                    key={publication.id}
                    revealDelay={index}
                  />
                ))}
              </ol>
            </Fragment>
          ))}

          <div
            className="publication-group-heading recognition-heading"
            data-reveal="up"
          >
            <h3>Selected Recognition</h3>
          </div>
          <ul className="recognition-list">
            <li data-reveal="up">
              <span className="recognition-date">Media</span>
              <strong>
                <a
                  className="recognition-title-link"
                  href="https://spectrum.ieee.org/tactile-data-robots"
                  target="_blank"
                  rel="noreferrer"
                  data-analytics-event="recognition-restacvla-ieee-spectrum"
                >
                  IEEE Spectrum 专题报道｜Robots Are Learning to Feel：ResTacVLA
                  迈向触觉驱动的 Physical AI
                </a>
              </strong>
              <time dateTime="2026">2026</time>
            </li>
            <li data-reveal="up" data-reveal-delay="1">
              <span className="recognition-date">Challenge</span>
              <strong>
                Third Prize Winner of the ManiSkill-ViTac 2026 Challenge at CVPR
                2026
              </strong>
              <time dateTime="2026">2026</time>
            </li>
            <li data-reveal="up" data-reveal-delay="2">
              <span className="recognition-date">Media</span>
              <strong>
                <a
                  className="recognition-title-link"
                  href="https://mp.weixin.qq.com/s/Q_Q9xwdPnEaffNV-SNBlyQ"
                  target="_blank"
                  rel="noreferrer"
                  data-analytics-event="recognition-restacvla-zgca"
                >
                  北京中关村学院官方聚焦｜ResTacVLA：迈向更可靠的视觉–触觉具身智能新范式
                </a>
              </strong>
              <time dateTime="2026">2026</time>
            </li>
            <li data-reveal="up" data-reveal-delay="3">
              <span className="recognition-date">Profile</span>
              <strong>
                <a
                  className="recognition-title-link"
                  href="https://mp.weixin.qq.com/s/JSoGWFeezXtnz1TpyoM3tw"
                  target="_blank"
                  rel="noreferrer"
                  data-analytics-event="recognition-bjtu-profile"
                >
                  Zhixing Scholarship · Xiaomi Special Scholarship · Beijing
                  Jiaotong University “Star of Self-Strengthening”
                </a>
              </strong>
              <time dateTime="2024">2024</time>
            </li>
            <li data-reveal="up" data-reveal-delay="4">
              <span className="recognition-date">Media</span>
              <strong>
                <a
                  className="recognition-title-link"
                  href="https://peking.bjd.com.cn/content/s669a55f0e4b064178156eac7.html"
                  target="_blank"
                  rel="noreferrer"
                  data-analytics-event="recognition-beijing-daily"
                >
                  北京日报人物报道｜在学习与成长中寻找自己的方向
                </a>
              </strong>
              <time dateTime="2024">2024</time>
            </li>
          </ul>
        </section>

        <LikeButton />

        <div
          className="social-links"
          aria-label="Social profiles"
          data-reveal="up"
        >
          <a
            className="email-icon"
            href="mailto:zhangpengwei2024@ia.ac.cn"
            title="Email: zhangpengwei2024@ia.ac.cn / pweiii@163.com"
            aria-label="Email Pengwei Zhang at zhangpengwei2024@ia.ac.cn; alternate address pweiii@163.com"
            data-analytics-event="contact-email"
          >
            <FaEnvelope aria-hidden="true" />
          </a>
          <a
            className="scholar-icon"
            href="https://scholar.google.com/citations?user=Fb-JqDYAAAAJ&hl=zh-CN"
            target="_blank"
            rel="me noreferrer"
            title="Google Scholar"
            data-analytics-event="profile-google-scholar"
          >
            <SiGooglescholar aria-hidden="true" />
            <span className="sr-only">Google Scholar</span>
          </a>
          <a
            className="github-icon"
            href="https://github.com/Awilekong"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            data-analytics-event="profile-github"
          >
            <FaGithub aria-hidden="true" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            className="xiaohongshu-icon"
            href="https://www.xiaohongshu.com/user/profile/61112b75000000000101ca18"
            target="_blank"
            rel="noreferrer"
            title="Xiaohongshu"
            data-analytics-event="profile-xiaohongshu"
          >
            <SiXiaohongshu aria-hidden="true" />
            <span className="sr-only">Xiaohongshu</span>
          </a>
          <ShareButton />
        </div>
      </article>
      <RoamingCat />
    </main>
  );
}
