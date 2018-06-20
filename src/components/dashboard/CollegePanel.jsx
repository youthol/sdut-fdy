import React, { Component } from "react";
import "./CollegePanel.css";
import AvatrtCard from "./AvatarCard";
import CollegeDesc from "./CollegeDesc";
import avatarPic from "./pic";

class CollegePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collegeList: [
        {
          key: 1,
          name: "机械工程学院"
        },
        {
          key: 2,
          name: "交通与车辆工程学院"
        },
        {
          key: 3,
          name: "农业工程与食品科学学院"
        },
        {
          key: 4,
          name: "电气与电子工程学院"
        },
        {
          key: 5,
          name: "计算机科学与技术学院"
        },
        {
          key: 6,
          name: "化学化工学院"
        },
        {
          key: 7,
          name: "建筑工程学院"
        },
        {
          key: 8,
          name: "资源与环境工程学院"
        },
        {
          key: 9,
          name: "材料科学与工程学院"
        },
        {
          key: 10,
          name: "生命科学学院"
        },
        {
          key: 11,
          name: "数学与统计学院"
        },
        {
          key: 12,
          name: "物理与光电工程学院"
        },
        {
          key: 13,
          name: "经济学院"
        },
        {
          key: 14,
          name: "管理学院"
        },
        {
          key: 15,
          name: "文学与新闻传播学院"
        },
        {
          key: 16,
          name: "外国语学院"
        },
        {
          key: 17,
          name: "法学院"
        },
        {
          key: 18,
          name: "美术学院"
        },
        {
          key: 19,
          name: "音乐学院"
        },
        {
          key: 20,
          name: "体育学院"
        },
        {
          key: 21,
          name: "鲁泰纺织服装学院"
        }
      ],
      collegeInfo: [
        {
          key: 1,
          collegeName: "机械工程学院",
          teachers: [
            {
              id: 1,
              name: "田兆富",
              type: "党总支副书记",
              avatar: avatarPic.pic_1_1
            },
            {
              id: 2,
              name: "钟丽霞",
              type: "学生工作办公室主任、团总支书记",
              avatar: avatarPic.pic_1_2
            },
            {
              id: 3,
              name: "朱峰",
              type: "辅导员",
              avatar: avatarPic.pic_1_3
            },
            {
              id: 4,
              name: "冯娅妮",
              type: "辅导员",
              avatar: avatarPic.pic_1_4
            },
            {
              id: 5,
              name: "张燕丽",
              type: "辅导员",
              avatar: avatarPic.pic_1_5
            },
            {
              id: 6,
              name: "魏晓栋",
              type: "辅导员",
              avatar: avatarPic.pic_1_6
            },
            {
              id: 7,
              name: "李昌联",
              type: "辅导员",
              avatar: avatarPic.pic_1_7
            },
            {
              id: 8,
              name: "王昌忠",
              type: "辅导员",
              avatar: avatarPic.pic_1_8
            }
          ],
          description: [
            "机械工程学院现有在校生2815人,其中研究生170人，学院设有四个本科专业、三个研究生专业，并承担了学校CDIO工程教育、“卓越工程师”、本科创新实验班、中外合作办学、春季招生等改革试点，现有辅导员7人。学生工作紧紧围绕立德树人根本任务，坚持以人为本的工作理念，以形成全员、全过程、全方位育人格局为导向，以教书育人、管理育人、服务育人为基本内容，以学风建设为核心，以为学生思想政治教育主线，以课堂、宿舍和社团为平台，以辅导员、学生骨干和班级导师队伍为抓手，建立以教管融合、专兼结合的学生工作机制，不断完善的学生教育管理服务体系，使学生教育管理服务与培养目标、形势变化、学生特点和成长需要相适应，全面服务于学生成长成才。"
          ]
        },
        {
          key: 2,
          collegeName: "交通与车辆工程学院",
          teachers: [
            {
              id: 1,
              name: "王建兴",
              type: "党总支副书记",
              avatar: avatarPic.pic_2_1
            },
            {
              id: 2,
              name: "高萌",
              type: "学生工作办公室主任、团总支书记",
              avatar: avatarPic.pic_2_2
            },
            {
              id: 3,
              name: "尹晓盛",
              type: "辅导员",
              avatar: avatarPic.pic_2_3
            },
            {
              id: 4,
              name: "侯娟",
              type: "辅导员",
              avatar: avatarPic.pic_2_4
            },
            {
              id: 5,
              name: "国睿",
              type: "辅导员",
              avatar: avatarPic.pic_2_5
            },
            {
              id: 6,
              name: "周燕燕",
              type: "辅导员",
              avatar: avatarPic.pic_2_6
            }
          ],
          description: [
            "交通与车辆工程学院始终秉承“以生为本、以爱为源，全面服务学生成长成才”的工作理念，发扬“勤奋、创新、和谐、卓越”的院风精神，致力于培养专业基础厚、人文素质高、实践能力强、专业特色亮的高素质应用型人才，努力构建“31245”的学生工作框架，即：搭建“理论教学、创新实践和素质教育”三个平台，以学风建设为一条主线，协调好学生全面发展和个性发展、教学互动和师生联动两种关系，完善学生教育、管理、服务和就业四大体系，实施学生“五个一”的素质提升计划（即参加一次主题发言或主题演讲，参加一个社团或学生组织、参加一次社会实践活动、参加一个科研创新小组或科研活动、撰写一篇与专业相关的调查研究报告），确保实现常规工作开展有序，重点工作推进有力，特色工作亮点纷呈。近年来，学院学生已申请并被授权国家专利近三百项，在省级以上科技竞赛中获奖320余项，先后取得了全国先进班集体等荣誉称号，学院学生工作连年被评为学校学生工作先进单位。"
          ]
        },
        {
          key: 3,
          collegeName: "农业工程与食品科学学院",
          teachers: [
            {
              id: 1,
              name: "曹玉霞",
              type: "党总支副书记",
              avatar: avatarPic.pic_3_1
            },
            {
              id: 2,
              name: "高坤",
              type: "学生工作办公室主任、团总支书记",
              avatar: avatarPic.pic_3_2
            },
            {
              id: 3,
              name: "芦燚",
              type: "辅导员",
              avatar: avatarPic.pic_3_3
            },
            {
              id: 4,
              name: "张佳",
              type: "辅导员",
              avatar: avatarPic.pic_3_4
            },
            {
              id: 5,
              name: "曹林林",
              type: "辅导员",
              avatar: avatarPic.pic_3_5
            },
            {
              id: 6,
              name: "苏新勇",
              type: "辅导员",
              avatar: avatarPic.pic_3_6
            }
          ],
          description: [
            "农业工程与食品科学学院学生工作以培养高素质的合格人才为目标，以基础文明教育为先导，以加强学风建设为中心，以科技创新为载体,狠抓落实，锐意进取，积极打造学生成长成才的和谐环境，促进学生快乐学习、快乐生活、快乐成长。",
            "近四年来，我院学生工作在各个方面都取得了不菲的成绩。在全国“挑战杯”、“山东省机电大赛”、“齐鲁创业大赛”等科技创新竞赛活动中，共获得省部级以上奖励112项，涉及510人次；共有321人考取硕士研究生，考研率稳中有进，就业率维持在90%以上，连续被评为教学工作、学生工作、就业工作、共青团工作先进集体。在以后的工作中，我们会始终坚持以学风建设中心不动摇，在思想引领、科技创新、创业教育、职业规划、文化活动等方面充分结合实际，总结经验，发扬特色，创新工作思路，服务学生教育管理，争取更大的成绩。",
            "农业工程与食品科学学院全体学生工作人员将以饱满的热情，务实的态度，与全院同学一起，打造农业工程学院学生工作的品牌。"
          ]
        },
        {
          key: 4,
          collegeName: "电气与电子工程学院",
          teachers: [
            {
              id: 1,
              name: "刘东锋",
              type: "党总支副书记",
              avatar: avatarPic.pic_4_1
            },
            {
              id: 2,
              name: "韩智利",
              type: "学生工作办公室主任、团总支书记",
              avatar: avatarPic.pic_4_2
            },
            {
              id: 3,
              name: "谢婕",
              type: "辅导员",
              avatar: avatarPic.pic_4_3
            },
            {
              id: 4,
              name: "李红玲",
              type: "辅导员",
              avatar: avatarPic.pic_4_4
            },
            {
              id: 5,
              name: "陈强",
              type: "辅导员",
              avatar: avatarPic.pic_4_5
            },
            {
              id: 6,
              name: "李璐",
              type: "辅导员",
              avatar: avatarPic.pic_4_6
            },
            {
              id: 7,
              name: "王翔宇",
              type: "辅导员",
              avatar: avatarPic.pic_4_7
            },
            {
              id: 8,
              name: "王国昊",
              type: "辅导员",
              avatar: avatarPic.pic_4_8
            },
            {
              id: 9,
              name: "秦雪瑶",
              type: "辅导员",
              avatar: avatarPic.pic_4_9
            }
          ],
          description: [
            "电气学院学生工作以科学发展观为引领，紧紧围绕学校中心工作，坚持以学生为本、全面服务学生成长成才的工作理念，着重培养学生的实践能力和创新能力，突出学院特色，为学生的全面发展和健康成长成才提供服务平台。",
            "以理想信念教育为核心内容，开展 以 “我的中国梦”主题教育活动以及十八大、十八届二中、三中、四中全会精神学习 等 活动，帮助学生形成正确的人生观、世界观和价值观。 ",
            "以班级和宿舍为基点，研究制定了《电气学院学风建设实施方案（第二期）》，通过辅导员听课、班级导师引领、加强课堂考勤、“一对一”重点帮扶等措施，促进了学院优良学风的形成。 ",
            "以公寓制度建设为基础，结合专业特点，合理规划，突出重点，积极开展丰富多彩的公寓文化活动,为学生营造良好的学习和生活氛围。 ",
            "以各类主题活动为载体，切实加强共青团工作，实现了共青团工作的蓬勃发展。",
            "以学生科技创新基地建设为契机，鼓励学生加强训练，培养兴趣，为学生参加各种创新活动和各类科技竞赛搭建平台,学生在各类科技竞赛中获得多项奖励。",
            "以就业观念转变为突破口，积极引导学生就业和创业。通过主动走访用人单位、邀请用人单位来院举办专场招聘会、建立就业实习基地等形式，不断提高学生的就业率和就业质量。 "
          ]
        },
        {
          key: 5,
          collegeName: "计算机科学与技术学院",
          teachers: [
            {
              id: 1,
              name: "娄春婷",
              type: "党总支副书记",
              avatar: avatarPic.pic_5_1
            },
            {
              id: 2,
              name: "刘灿德",
              type: "学生工作办公室主任、团总支书记",
              avatar: avatarPic.pic_5_2
            },
            {
              id: 3,
              name: "王寿朋",
              type: "辅导员",
              avatar: avatarPic.pic_5_3
            },
            {
              id: 4,
              name: "刘丛丛",
              type: "辅导员",
              avatar: avatarPic.pic_5_4
            },
            {
              id: 5,
              name: "张雨",
              type: "辅导员",
              avatar: avatarPic.pic_5_5
            },
            {
              id: 6,
              name: "李文婷",
              type: "辅导员",
              avatar: avatarPic.pic_5_6
            },
            {
              id: 7,
              name: "刘明卿",
              type: "辅导员",
              avatar: avatarPic.pic_5_7
            },
            {
              id: 8,
              name: "周蕾",
              type: "辅导员",
              avatar: avatarPic.pic_5_8
            },
            {
              id: 9,
              name: "波合丽且姆·阿卜力克木",
              type: "辅导员",
              avatar: avatarPic.pic_5_9
            }
          ],
          description: [
            "计算机科学与技术学院学生工作紧紧围绕“放飞梦想，追求卓越，智慧人生，成就你我”的学院宗旨，以创新创建学院文化为突破口，牢固抓住“培育IT英才”这一根本任务，着重实施基础教育、学风建设、创新实践、素质拓展和校企合作“五项”工程。坚持以社会主义核心价值观教育为核心，深入开展理想信念教育，培养学生良好的个人品德和社会公德；扎实推进学风建设，以学生公寓社区、课堂教学为主阵地强化学风养成，狠抓考风考纪，形成良性循环；强化科技创新平台建设和梯队建设，以ACM/ICPC大学生程序设计竞赛、齐鲁软件设计大赛、“挑战杯”创业计划大赛为突破口深入开展创新实践活动；以校园文化活动和社团活动为载体，拓展学生的综合素质；加强校企合作，突出校内专业教学和企业实训有机结合，强化创新精神和实践能力的培养，提升学生就业质量。逐渐形成“厚基础、重学风、强特色、固文化”的学生工作新局面。"
          ]
        },
        {
          key: 6,
          collegeName: "化学化工学院",
          teachers: [
            {
              id: 1,
              name: "李冰强",
              type: "党总支副书记",
              avatar: avatarPic.pic_6_1
            },
            {
              id: 2,
              name: "曹晓媛",
              type: "学生工作办公室主任、团总支书记",
              avatar: avatarPic.pic_6_2
            },
            {
              id: 3,
              name: "毕奎奎",
              type: "辅导员",
              avatar: avatarPic.pic_6_3
            },
            {
              id: 4,
              name: "高勇",
              type: "辅导员",
              avatar: avatarPic.pic_6_4
            },
            {
              id: 5,
              name: "赵佳佳",
              type: "辅导员",
              avatar: avatarPic.pic_6_5
            },
            {
              id: 6,
              name: "类延东",
              type: "辅导员",
              avatar: avatarPic.pic_6_6
            },
            {
              id: 7,
              name: "王菲",
              type: "辅导员",
              avatar: avatarPic.pic_6_7
            }
          ],
          description: [
            "学院学生工作紧紧围绕“知识、能力、素质”三位一体的培养目标，创新工作思路，构建工作特色，已形成一支与教学科研相匹配、经验丰富的学生工作团队，并建立和完善了一套行之有效的运行机制与工作模式。",
            "以思想教育为核心，有效开展各项教育活动。重视科技创新，鼓励学生参加全国挑战杯、化工设计大赛等活动，学生多次获国家及省级科技荣誉，专利发明、论文著作10余项。以学风建设为基础，扎实开展班级导师制，通过“大学生发展指导室”、名师导航、氟硅材料班等促进学风建设。以学生党建为重点，着重提升学生党员整体素质。以就业创业为导向，不断拓宽就业渠道，强化就业指导服务。",
            "近年来成绩显著，先后获“学生工作先进单位”“红旗团总支”“毕业生就业工作先进集体”“宣传报道先进集体”荣誉，院学生会连续三年获校级“优秀学生会”荣誉，院2个社团获校级“优秀社团”荣誉。工作理念的不断创新与工作机制的不断完善，为院学生工作稳步发展提供了有力支撑。"
          ]
        },
        {
          key: 7,
          collegeName: "建筑工程学院",
          teachers: [
            {
              id: 1,
              name: "王延深",
              type: "党总支副书记",
              avatar: avatarPic.pic_7_1
            },
            {
              id: 2,
              name: "李萍",
              type: "学生工作办公室主任、团总支书记",
              avatar: avatarPic.pic_7_2
            },
            {
              id: 3,
              name: "赵峰峰",
              type: "辅导员",
              avatar: avatarPic.pic_7_3
            },
            {
              id: 4,
              name: "牟晓莹",
              type: "辅导员",
              avatar: avatarPic.pic_7_4
            },
            {
              id: 5,
              name: "亓强",
              type: "辅导员",
              avatar: avatarPic.pic_7_5
            },
            {
              id: 6,
              name: "耿连娜",
              type: "辅导员",
              avatar: avatarPic.pic_7_6
            },
            {
              id: 7,
              name: "侯春宏",
              type: "辅导员",
              avatar: avatarPic.pic_7_7
            }
          ],
          description: [
            "建筑工程学院学生工作以深化教育、严格管理、突出服务为工作理念，以学风建设为重点，以提高大学生的创新意识和动手能力为核心，全面服务学生成长成才。（1）完善制度，严格管理，扎实做到学生工作的规范性和科学性。（2）以生为本，以爱为源，构建分年级、分主题、各有侧重、首尾呼应的具有年级特色的教育体系，提高大学生教育的针对性与实效性。（3）坚持学习引导和学业指导相结合，加强公寓和班级两个学习阵地建设，以品牌化、常态化、系统化、社会化专业技能竞赛为载体，以社会实践、第二课堂为拓展，不断提高学生的创新意识和动手能力。（4）坚持就业指导、就业能力提升相结合，不断提高学生的职业素养和就业竞争力。（5）坚持培养和使用相结合，加强学生骨干队伍建设与辅导员队伍建设，提高学生工作效率和工作水平。（6）坚持助困与励志相结合、心理健康教育与自立自强相结合、安全预警与突发事件处置相结合，服务学生生活。"
          ]
        },
        {
          key: 8,
          collegeName: "资源与环境工程学院",
          teachers: [
            {
              id: 1,
              name: "李栋祥",
              type: "党总支副书记",
              avatar: avatarPic.pic_8_1
            },
            {
              id: 2,
              name: "赵鹏",
              type: "学生工作办公室主任、团总支书记",
              avatar: avatarPic.pic_8_2
            },
            {
              id: 3,
              name: "张倩 ",
              type: "辅导员",
              avatar: avatarPic.pic_8_3
            },
            {
              id: 4,
              name: "左安源",
              type: "辅导员",
              avatar: avatarPic.pic_8_4
            },
            {
              id: 5,
              name: "苗涛",
              type: "辅导员",
              avatar: avatarPic.pic_8_5
            }
          ],
          description: [
            "资源与环境工程学院现有采矿工程、矿物加工工程、勘查技术与工程、环境工程、资源循环科学与工程五个专业，在校生1321人。近年来，学院学生工作结合专业特色，以学生工作进公寓、学生党员践行“七个一”、“无人监考”试点三大特色工程为标志，以社会主义核心价值观为主线，以学风建设为突破，以丰富多彩的团学活动为载体，以就业服务为导向，以促进学生成长成才为根本出发点，全面落实大学生的主体地位，充分发挥大学生的主体功能，着重提高学生创新创业能力。学院学生会连年被评为校级优秀学生会；洁宇环保社、大学生成才促进社、齐云足球社、MG绘图协会四个社团多次荣获学校明星社团和优秀社团荣誉称号；毕业生考研录取率达到33%，正式就业率超过95%。",
            "学院将继续秉承“育人为本”的办学理念，优化学习环境，浓郁学习氛围，提高人才培养质量，努力向社会输送专业素质高、实践能力强、适应能力快、具有一定创新精神的工程实践人才。"
          ]
        },
        {
          key: 9,
          collegeName: "材料科学与工程学院",
          teachers: [
            {
              id: 1,
              name: "陈沙",
              type: "党总支副书记",
              avatar: avatarPic.pic_9_1
            },
            {
              id: 2,
              name: "王潇伟",
              type: "学生工作办公室主任、团总支书记",
              avatar: avatarPic.pic_9_2
            },
            {
              id: 3,
              name: "齐航",
              type: "辅导员",
              avatar: avatarPic.pic_9_3
            },
            {
              id: 4,
              name: "张福玲",
              type: "辅导员",
              avatar: avatarPic.pic_9_4
            },
            {
              id: 5,
              name: "李昊宇",
              type: "辅导员",
              avatar: avatarPic.pic_9_5
            }
          ],
          description: [
            "材料科学与工程学院现有在校本科生1181人，研究生37人。该院学生工作紧紧围绕“培养什么人、怎样培养人”这一根本问题，秉持“尊重人、关心人 、成就人、发展人”的工作理念，遵循“一二三四五”的工作思路，即以学生的全面发展为中心，突出学风建设和学生发展内生动力的激发两条主线，依托专任教师、专兼职辅导员、学生三个主体，夯实学生会、班级党团组织、学生宿舍以及网络虚拟社区四个阵地，强化整合育人资源、健全规章制度、创建平台载体、促进就业创业和抓好安全稳定五个着力点，努力培养理想信念坚定、道德情操高尚、智慧得以启迪、专业知识扎实、创新精神与实践能力强、社会适应能力好的创新性应用人才。",
            "近年来，在校党委、校行政的正确领导下，在有关职能部门的大力支持下，该院学生考研率突破30%，就业率在90%以上，公寓社区荣获“学生公寓社区建设创新基地”，连续多年被评为学生工作先进集体、就业工作先进单位、暑期社会实践先进团总支。"
          ]
        },
        {
          key: 10,
          collegeName: "生命科学学院",
          teachers: [
            {
              id: 1,
              name: "陆广峰",
              type: "党总支副书记",
              avatar: avatarPic.pic_10_1
            },
            {
              id: 2,
              name: "李兰晶",
              type: "学生工作办公室主任、团总支书记",
              avatar: avatarPic.pic_10_2
            },
            {
              id: 3,
              name: "蒋育忻",
              type: "辅导员",
              avatar: avatarPic.pic_10_3
            },
            {
              id: 4,
              name: "翟静涛",
              type: "辅导员",
              avatar: avatarPic.pic_10_4
            }
          ],
          description: [
            "一个目标：“安全、文明、活泼、尚学”：全院学生不出大的安全责任事故。",
            "两个着力：着力推进第二期学风建设计划（在学风建设中做到“全覆盖、制度化、重实效”，促进学生“学有规划、学有规范、学有平台、学有动力”，努力形成“德业双修，学而不厌”的良好氛围）；",
            "着力通过学生工作进公寓（突出“以生为本、为生服务”的理念，按照学生三自原则，提高实效性）、进课堂，增进辅导员与班级和任课教师的联系。",
            "三个抓手：凝聚班级这个集体；抓好学生干部这支队伍；增强辅导员的责任心。",
            "三为四全：学生日常教育管理坚持“一切为了学生、为了一切学生、为了学生的一切”；倡导“全方位的教育、全过程的管理、全天候的服务，全身心的投入”。",
            "六个工作范围：学生教育、学生管理、学生服务、共青团工作、就业工作、辅导员自身建设。",
            "落脚点：增强学生工作的规范性、可操作性。"
          ]
        },
        {
          key: 11,
          collegeName: "数学与统计学院",
          teachers: [
            {
              id: 1,
              name: "王仲孝",
              type: "党总支副书记",
              avatar: avatarPic.pic_11_1
            },
            {
              id: 2,
              name: "王婷",
              type: "学生工作办公室主任、团总支书记",
              avatar: avatarPic.pic_11_2
            },
            {
              id: 3,
              name: "王超",
              type: "辅导员",
              avatar: avatarPic.pic_11_3
            },
            {
              id: 4,
              name: "王凤璐",
              type: "辅导员",
              avatar: avatarPic.pic_11_4
            },
            {
              id: 5,
              name: "张丽姣",
              type: "辅导员",
              avatar: avatarPic.pic_11_5
            },
            {
              id: 6,
              name: "加尼别克·阿布拉",
              type: "辅导员",
              avatar: avatarPic.pic_11_6
            }
          ],
          description: [
            "数学与统计学院现有数学与应用数学、信息与计算科学、统计学3个本科专业和智能终端技术与应用中新合作专科专业，在校生1350余人。 学院秉承“育人为本、引导学生健康成长成才”的工作理念，持续深化“两工程一计划”--优良学风建设工程、“明礼•尚德”修身工程和大学生创新创业支持计划，以学风建设为主线，以全面提高大学生综合素质和能力为落脚点，不断增强工作的实效性，形成了辅导员、任课教师、家长、学生四位一体的立体式思想教育、管理、服务格局。",
            "学院团总支现有专职辅导员5名，下设学生会和以数学建模爱好者协会、星火爱教联盟为代表的学生社团5个。近年来，在科技创新、学术竞赛等方面取得优异成绩。学院设有“万哲先数学实验班”，着力培养数学及相关专业领域的优秀拔尖人才，首届2013级实验班有近80%学生考入985/211高校深造。"
          ]
        },
        {
          key: 12,
          collegeName: "物理与光电工程学院",
          teachers: [
            {
              id: 1,
              name: "戴洁",
              type: "党总支副书记",
              avatar: avatarPic.pic_12_1
            },
            {
              id: 2,
              name: "亓鹏",
              type: "学生工作办公室主任、团总支书记",
              avatar: avatarPic.pic_12_2
            },
            {
              id: 3,
              name: "崔鹏",
              type: "辅导员",
              avatar: avatarPic.pic_12_3
            }
          ],
          description: [
            "物理与光电工程学院成立于2017年6月，现有物理学、光电信息科学与工程2个专业，专职辅导员2名，下设学生会和天文爱好者协会、物理协会、吉他协会、跆拳道协会4个社团。",
            "学院学生工作以立德树人为根本任务，紧紧围绕学生成长成才，夯实基础、强化服务，突出实效，努力营造良好的育人环境，为培养有社会责任、有创新精神、有专门知识、有实践能力、有健康身心的应用型高级专门人才而不懈努力！"
          ]
        },
        {
          key: 13,
          collegeName: "经济学院",
          teachers: [
            {
              id: 1,
              name: "朱星辉",
              type: "党总支副书记",
              avatar: avatarPic.pic_13_1
            },
            {
              id: 2,
              name: "孙兆风",
              type: "学生工作办公室主任、团总支书记",
              avatar: avatarPic.pic_13_2
            },
            {
              id: 3,
              name: "郭洪涛",
              type: "辅导员",
              avatar: avatarPic.pic_13_3
            },
            {
              id: 4,
              name: "齐丹丹",
              type: "辅导员",
              avatar: avatarPic.pic_13_4
            },
            {
              id: 5,
              name: "毛婷",
              type: "辅导员",
              avatar: avatarPic.pic_13_5
            },
            {
              id: 6,
              name: "赵星",
              type: "辅导员",
              avatar: avatarPic.pic_13_6
            }
          ],
          description: [
            "经济学院位于山东理工大学东校区，现设有金融学、国际经济与贸易、经济学3个本科专业及经济创新实验班，设有产业经济学、世界经济、金融专硕和农业推广硕士4个硕士点，现有教职工62人，全日制本科生1563人，全日制研究生93人，在职研究生171人。 经济学院拥有一支爱岗敬业、严谨务实、朝气蓬勃的学生工作队伍，学生工作人员共6名，学生工作主管领导1名，学生专职辅导员5名。学院坚持“育人为本、德育为先、全面服务学生成长成才”的学生工作理念，以培养“有社会责任、有创新精神、有专门知识、有实践能力、有健康身心”的“五有”人才为工作目标，以学风建设为基础，以社会主义核心价值观教育为重点，充分发挥学科优势，突出学生专业素养与实践能力，不断优化学生成长成才环境。学院多次获得学生工作先进单位、红旗团总支（团委）和就业先进集体等荣誉称号。 "
          ]
        },
        {
          key: 14,
          collegeName: "管理学院",
          teachers: [
            {
              id: 1,
              name: "魏法汇",
              type: "党总支副书记",
              avatar: avatarPic.pic_14_1
            },
            {
              id: 2,
              name: "巩丽",
              type: "学生工作办公室主任、团总支书记",
              avatar: avatarPic.pic_14_2
            },
            {
              id: 3,
              name: "于国良",
              type: "辅导员",
              avatar: avatarPic.pic_14_3
            },
            {
              id: 4,
              name: "李金香",
              type: "辅导员",
              avatar: avatarPic.pic_14_4
            },
            {
              id: 5,
              name: "王循聪",
              type: "辅导员",
              avatar: avatarPic.pic_14_5
            },
            {
              id: 6,
              name: "许敬",
              type: "辅导员",
              avatar: avatarPic.pic_14_6
            },
            {
              id: 7,
              name: "沙作彬",
              type: "辅导员",
              avatar: avatarPic.pic_14_7
            },
            {
              id: 8,
              name: "曹睿",
              type: "辅导员",
              avatar: avatarPic.pic_14_8
            }
          ],
          description: [
            "管理学院现设财务管理、工商管理等6个本科专业和管理科学与工程、工商管理两个一级学科硕士学位授予点和工业工程专业硕士学位授予点。学院现有教职工95人，全日制本科生2700余人，研究生40余人，MBA学员311人。 管理学院拥有一支敬业奉献、严谨务实、朝气蓬勃的学生工作队伍。学生工作人员共8名，院分管领导1名，学生专职辅导员7名。学院坚持“育人为本、德育为先、全面服务学生成长成才”的学生工作理念，牢牢扭住学风建设核心，突出学生实践能力锻炼和创新创业教育，以社会主义核心价值观教育为重点，不断强化学生党建工作的龙头作用，积极构建“科学管理是基础、强化教育是先导、完善服务是保障”的学生工作体系，努力优化学生成长成才环境，在学生教育管理、校园文化、创新创业、社会实践、示范群体建设等方面取得了显著成绩。 "
          ]
        },
        {
          key: 15,
          collegeName: "文学与新闻传播学院",
          teachers: [
            {
              id: 1,
              name: "孙钦泉",
              type: "党总支副书记",
              avatar: avatarPic.pic_15_1
            },
            {
              id: 2,
              name: "李华伟",
              type: "学生工作办公室主任、团总支书记",
              avatar: avatarPic.pic_15_2
            },
            {
              id: 3,
              name: "刘菲菲",
              type: "辅导员",
              avatar: avatarPic.pic_15_3
            },
            {
              id: 4,
              name: "田明月",
              type: "辅导员",
              avatar: avatarPic.pic_15_4
            },
            {
              id: 5,
              name: "张健",
              type: "辅导员",
              avatar: avatarPic.pic_15_5
            }
          ],
          description: [
            "文学与新闻传播学院学生工作坚持立德树人导向,以“品行、学风、实践、规范”为主线，促进学生全面自由发展。加强思想政治教育。寓教育于学生工作各环节，给予学生人文关怀，重点抓好学生干部诚信、综合考评诚信，推动优良院风班风形成，引导学生自觉践行社会主义核心价值观。突出学风建设。教学联动提高授课质量，帮助学生激发内在学习动机，通过专家教授报告、国外访问学者归来谈、优秀校友能量传递、生涯发展工作坊等，指导学生走好大学路，科学规划职业生涯。强化实践育人。充分发挥校园文化艺术活动、学生社团、社会实践、创新创业、志愿服务等对学生的培养磨练，培育“国学达人”挑战赛、中华经典诵读大赛、青春诗会、文学作品大赛、公益广告设计大赛等品牌活动。以规矩成方圆。建立科学完善的规章和严谨明确的规范流程，砥砺遵守，让每个学生得到公正的对待和评价，提高学生社会化水平。全院师生共同努力，让更多学子成为“谦谦君子,温润如玉”。"
          ]
        },
        {
          key: 16,
          collegeName: "外国语学院",
          teachers: [
            {
              id: 1,
              name: "姜素锦",
              type: "党总支副书记",
              avatar: avatarPic.pic_16_1
            },
            {
              id: 2,
              name: "王伟",
              type: "学生工作办公室主任、团总支书记",
              avatar: avatarPic.pic_16_2
            },
            {
              id: 3,
              name: "曲东",
              type: "辅导员",
              avatar: avatarPic.pic_16_3
            },
            {
              id: 4,
              name: "朱岩",
              type: "辅导员",
              avatar: avatarPic.pic_16_4
            },
            {
              id: 5,
              name: "王惠",
              type: "辅导员",
              avatar: avatarPic.pic_16_5
            }
          ],
          description: [
            "外国语学院学生工作站在外语应用人才培养的视角，深入探讨应用型外语专业学生职业能力的构成要素，以学风建设为主线，以制度建设为保障，以骨干培养为突破口，发挥第二课堂服务于竞争力强、特色鲜明的外院人才培养目标的重要作用，为学生成长成才创造良好环境。",
            "学院以社会主义核心价值观教育实践系列活动为载体，提出外国语学院价值准则，树立学生“国际范儿”的良好形象；以外语文化节系列活动为平台，实施“三大计划”（朗读、翻译、辩论等职业技能培养计划、考研学生支持计划、师范生从业技能提升计划），开展富有外院特色、参与度高、受众面广的第二课堂活动，培养学生“听说读写译”的专业技能；以积极参与学生工作的教师团队为支撑，形成专业指导贯穿培养、指导、评价全过程的职业素养提升计划，打造了一支指导我校学生参加国家级、省级竞赛的名师队伍；以规范化建设为保障，加强文化建设、制度建设、团队建设，深化“种子领袖”培养计划，切实提高学生工作的实效性。",
            "经过不懈努力，学生工作硕果累累，是学校首批学生工作创新基地之一，曾被评为学生工作先进单位、社团特色团总支和社会实践特色团总支，学生多次获国家级、省级大奖，学院获优秀人才培养奖。"
          ]
        },
        {
          key: 17,
          collegeName: "法学院",
          teachers: [
            {
              id: 1,
              name: "宋立平",
              type: "党总支副书记",
              avatar: avatarPic.pic_17_1
            },
            {
              id: 2,
              name: "许燕飞",
              type: "学生工作办公室主任、团总支书记",
              avatar: avatarPic.pic_17_2
            },
            {
              id: 3,
              name: "周丽妲",
              type: "辅导员",
              avatar: avatarPic.pic_17_3
            },
            {
              id: 4,
              name: "孙明",
              type: "辅导员",
              avatar: avatarPic.pic_17_4
            },
            {
              id: 5,
              name: "侯振中",
              type: "辅导员",
              avatar: avatarPic.pic_17_5
            },
            {
              id: 6,
              name: "孟晶晶",
              type: "辅导员",
              avatar: avatarPic.pic_17_6
            }
          ],
          description: [
            "学院高擎“关怀、责任、耕耘、挑战”的旗帜，坚持以培养创新型人才为总揽，以促建和服务大学生成长成才为主题，以品牌创建和学习创新为动力，以阵地建设为依托，活动为载体，结合院内学生工作的实际，积极研究和探索学生工作的新内容、新形式、新渠道、新空间，不断推进学分制条件下学生工作管理机制的系统化、制度化、规范化、精益化建设，重视培养和引导学生自我教育、自我管理、自我服务的意识，发挥其主体地位作用，增强工作的针对性和实效性。在全体学生工作人员和广大师生的共同努力下，在学风建设、科技文化活动、社会实践、制度建设、学生会和社团活动、宣传报道、工作研究等方面取得了显著成绩。近年来，法学院学生在山东省大学生辩论赛、山东省大学生模拟法庭大赛、“挑战杯”科技竞赛等省级比赛中获得奖励30余人次。 曾获得学生工作先进单位、就业工作先进单位、红旗团总支、社会实践特色团总支等荣誉称号。"
          ]
        },
        {
          key: 18,
          collegeName: "美术学院",
          teachers: [
            {
              id: 1,
              name: "荣国",
              type: "党总支副书记",
              avatar: avatarPic.pic_18_1
            },
            {
              id: 2,
              name: "秦伟伟",
              type: "学生工作办公室主任、团总支书记",
              avatar: avatarPic.pic_18_2
            },
            {
              id: 3,
              name: "王晓冬",
              type: "辅导员",
              avatar: avatarPic.pic_18_3
            },
            {
              id: 4,
              name: "侯倩",
              type: "辅导员",
              avatar: avatarPic.pic_18_4
            }
          ],
          description: [
            "美术学院现有专职学生工作人员4名，在校本专科生903人。学院学生工作坚持以大学生思想政治教育为主线，以学风建设为中心，本着全面服务学生成长成才的理念，关注和关心学生的生活、家庭、情绪、情感、前途和学习状况，努力创造和形成一种“和谐、宽松、认真、向上”的工作、学习环境。注重学生党员、班委、学生会和社团联合会的学生骨干队伍的培养和教育，促进学院良好学风的形成。制订和完善各项规章制度并严格落实，切实提高我院的学生思想教育、管理和服务工作的整体水平。",
            "同时，学院依托学生会和社团联合会等组织以专业为依托，积极开展丰富多彩的活动，繁荣和丰富校园文化。如：开展各类书画、设计、摄影、陶艺比赛、展览和培训，展现美术学院的专业特色，在丰富同学业余文化生活的同时促进专业创作水平的提高，为丰富校园文化建设做贡献。学院每年积极组织学生参加各层次专业类竞赛，在全国、省、市书画、设计作品展和各类大赛中，每年100余人次获奖。"
          ]
        },
        {
          key: 19,
          collegeName: "音乐学院",
          teachers: [
            {
              id: 1,
              name: "牟海萍",
              type: "党总支副书记",
              avatar: avatarPic.pic_19_1
            },
            {
              id: 2,
              name: "施海花",
              type: "学生工作办公室主任、团总支书记",
              avatar: avatarPic.pic_19_2
            },
            {
              id: 3,
              name: "王健",
              type: "辅导员",
              avatar: avatarPic.pic_19_3
            }
          ],
          description: [
            "音乐学院学生工作遵循校党委对学生工作的总体要求，围绕立德树人这一根本任务，结合学院实际，紧紧抓住学风建设这条主线，强化思想引领、规范事务管理、完善服务体系、加强组织保障，夯实基础、突出重点、打造特色，努力培养基础知识扎实、专业技能突出、综合素质全面、社会适应能力较强的应用型音乐人才。",
            "音乐学院党总支高度重视学生工作，积极推行班级导师制，发挥教师教书育人作用；加强学生干部队伍建设，发挥骨干带动作用，保障各项工作顺利开展。学院以培育和践行社会主义核心价值观主题教育活动为主线，实行分年级教育模式，强化大学生思想引领，不断提高我院青年学生的思想政治素质；以完善的学生动态管理体系、公开公平公正的评奖体系以及完善的制度建设，规范学生日常教育管理，营造良好学习氛围；依托以“学生为本”的服务体系和有效的师生沟通机制，服务学生全面健康发展。发挥校园文化指导基地作用，依托我院专业师资和三大学生社团在高雅校园文化建设方面的独特优势，开展高层次的校园文化活动，打造“稷下艺韵”高雅校园文化品牌，繁荣校园文化，助力学生成长成才。"
          ]
        },
        {
          key: 20,
          collegeName: "体育学院",
          teachers: [
            {
              id: 1,
              name: "宋伟",
              type: "党总支副书记",
              avatar: avatarPic.pic_20_1
            },
            {
              id: 2,
              name: "郝鹏",
              type: "学生工作办公室主任、团总支书记",
              avatar: avatarPic.pic_20_2
            },
            {
              id: 3,
              name: "孙婷",
              type: "辅导员",
              avatar: avatarPic.pic_20_3
            },
            {
              id: 4,
              name: "邱先慧",
              type: "辅导员",
              avatar: avatarPic.pic_20_4
            }
          ],
          description: [
            "体育学院目前设有体育教育和运动训练两个本科专业，现有在校生1173人，专职辅导员三名，兼职辅导员两名，有体育学院学生会和社团联合会、自律委、就业服务中心、新闻中心五大学生组织。",
            "在院总支、行政的正确领导下，体育学院学生工作紧紧围绕立德树人根本任务，秉承“以学生发展为本”的工作理念，着力培养学生的秩序意识、责任意识和创业意识，树立学生“素养与特色并蓄，专业与跨界融合”的发展理念，以学生党建为龙头，以就业工作为突破口，狠抓“基础管理、学风建设、队伍建设、平台建设”四项重点工作，坚持管理与服务并重，积极探索实施分级分类教育管理模式，努力推进学生工作规范化、目标化、科学化，建设全面服务于学生的成长成才,使每一个学生享有大学出彩的机会。",
            "近年来，在全院师生共同努力下，学生工作取得了优异成绩：2012、2013年学院连续2次获得学生工作先进单位，团总支多次获“校园文化特色团总支”和“社团特色团总支”。2014年荣获山东省大运会健美操比赛团体冠军；2014年女篮获得CUBA东北赛区第五名；2014年山东省大学生运动会获田径团体总分第二名，并获得“校长杯”和体育道德风尚奖；在第历届山东省基本功大赛中均取得优异成绩。"
          ]
        },
        {
          key: 21,
          collegeName: "鲁泰纺织服装学院",
          teachers: [
            {
              id: 1,
              name: "李鹏",
              type: "学生工作办公室主任、团总支书记",
              avatar: avatarPic.pic_21_1
            },
            {
              id: 2,
              name: "于珊",
              type: "辅导员",
              avatar: avatarPic.pic_21_2
            }
          ],
          description: [
            "适应校企合作人才培养模式需要，鲁泰纺织服装学院学生工作秉承“育人为本，全面服务学生成长成才”的工作理念和“倾心教育、精心管理、贴心服务”的工作宗旨，牢牢把握学风建设这一工作主线，紧紧依靠辅导员、学生党员、学生干部三支队伍，全力培养强实践、能管理、善创新、具有国际视野的德智体全面发展的高素质人才。",
            "以完善学生管理制度为切入点加强工作规范化建设，提高工作效率和服务学生水平；以微信新媒体平台建设为载体加强学生的思想教育，丰富教育方法手段，把握正确舆论导向，传播正能量；以班级目标责任制的实施为抓手深化学风建设，着力突出班级、宿舍在学风建设中的示范作用，进一步夯实学生的专业思想基础和学习基础；以“专业技能工作室”为依托，发挥班级导师的作用和校企合作平台的功能，鼓励支持学生参加各种专业技能大赛，强化学生实践能力和创新能力培养。在夯实常规工作的基础上，积极探索打造工作特色，不断提高工作的针对性和实效性。",
            "自2010年以来，我院在学风建设、社会实践、学生奖励激励机制、就业创业等方面逐渐形成了自己的体系与特色，为学生全面成长成才提供了良好的氛围和平台，思想政治教育工作取得良好效果。 "
          ]
        }
      ]
    };
  }
  getCurrentCollegeName() {
    const { collegeList } = this.state;
    for (let i = 0; i < collegeList.length; i++) {
      if (collegeList[i].key === Number(this.props.match.params.id)) {
        return i;
      }
    }
  }
  render() {
    return (
      <div className="main-content">
        <div className="personal-pic">
          {this.state.collegeInfo[this.getCurrentCollegeName()].teachers.map(
            (item, index) => <AvatrtCard teacher={item} key={item.id} />
          )}
        </div>
        <div className="college-desc">
          <CollegeDesc
            college={
              this.state.collegeInfo[this.getCurrentCollegeName()].collegeName
            }
            desc={
              this.state.collegeInfo[this.getCurrentCollegeName()].description
            }
          />
        </div>
      </div>
    );
  }
}

export default CollegePanel;
