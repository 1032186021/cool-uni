declare namespace Eps {
	interface LicensingAppEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 标识符
		 */
		identifier?: string;

		/**
		 * 公告
		 */
		notice?: string;

		/**
		 * Logo
		 */
		logo?: string;

		/**
		 * 版本号
		 */
		version?: string;

		/**
		 * 下载地址
		 */
		downloadUrl?: string;

		/**
		 * 提取码
		 */
		extractedCode?: string;

		/**
		 * 卡密套餐
		 */
		charge?: any;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface PintuanExchangeEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 兑换会员ID（ucenter，逻辑关联非外键）
		 */
		userId?: BigInt;

		/**
		 * 商品ID（逻辑关联 aios_pintuan_mall_goods，非外键）
		 */
		goodsId?: BigInt;

		/**
		 * 商品名称快照
		 */
		goodsTitle?: string;

		/**
		 * 消耗积分快照
		 */
		cost?: number;

		/**
		 * 发放的券码
		 */
		code?: string;

		/**
		 * 状态（PintuanExchangeStatusEnum）
		 */
		status?: number;

		/**
		 * 备注（作废原因等）
		 */
		remark?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface PintuanInviteEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 邀请人ID（ucenter，逻辑关联非外键）
		 */
		inviterId?: BigInt;

		/**
		 * 被邀请人ID（唯一：一个被邀请人只能有一个邀请人）
		 */
		inviteeId?: BigInt;

		/**
		 * 状态 0-待激活 1-已激活已奖励
		 */
		status?: number;

		/**
		 * 奖励积分
		 */
		rewardPoints?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface PintuanLotteryRecordEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 抽奖会员ID（ucenter，逻辑关联非外键）
		 */
		userId?: BigInt;

		/**
		 * 奖品ID（逻辑关联，非外键）
		 */
		prizeId?: BigInt;

		/**
		 * 奖品名称快照
		 */
		prizeName?: string;

		/**
		 * 奖品类型快照（PintuanLotteryPrizeTypeEnum）
		 */
		type?: number;

		/**
		 * 本次消耗积分快照
		 */
		cost?: number;

		/**
		 * 发放的券码
		 */
		code?: string;

		/**
		 * 是否已发放
		 */
		delivered?: boolean;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface PintuanTeamEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 拼多多团订单号（同一条拼单不允许重复入库）
		 */
		groupOrderId?: string;

		/**
		 * 商品ID
		 */
		goodsId?: string;

		/**
		 * 商品名（已去 html 标签）
		 */
		goodsName?: string;

		/**
		 * 商品缩略图
		 */
		hdThumbUrl?: string;

		/**
		 * 商品链接
		 */
		linkUrl?: string;

		/**
		 * 品牌名
		 */
		brandName?: string;

		/**
		 * 拼团价
		 */
		activityPrice?: number;

		/**
		 * 首发价（降价检测基准）
		 */
		basePrice?: number;

		/**
		 * 是否已发送降价提醒
		 */
		priceAlerted?: boolean;

		/**
		 * 原价
		 */
		originPrice?: number;

		/**
		 * 成团人数
		 */
		customerNum?: number;

		/**
		 * 还差几人成团
		 */
		groupRemainCount?: number;

		/**
		 * 拼多多原始团状态（0-进行中）
		 */
		groupStatus?: number;

		/**
		 * 团内用户列表快照
		 */
		groupUserList?: any;

		/**
		 * 过期时间戳(ms)
		 */
		expireTime?: BigInt;

		/**
		 * 是否系统自动开团
		 */
		isAuto?: boolean;

		/**
		 * 置顶时长(小时)
		 */
		topHours?: number;

		/**
		 * 置顶结束时间戳(ms)
		 */
		topEndTime?: BigInt;

		/**
		 * 发布者（ucenter 用户ID，逻辑关联非外键）
		 */
		userId?: BigInt;

		/**
		 * 团长等级
		 */
		level?: number;

		/**
		 * 团长信用分
		 */
		creditScore?: number;

		/**
		 * 是否认证团长
		 */
		verified?: boolean;

		/**
		 * 来源平台（PintuanPlatformEnum；当前抓取通道仅有拼多多）
		 */
		platform?: string;

		/**
		 * 拼单状态 0-进行中 1-已结束（过期或成团后由定时任务翻转）
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface PintuanReviewEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 拼团ID（逻辑关联 aios_pintuan_team，非外键）
		 */
		teamId?: BigInt;

		/**
		 * 评价会员ID（ucenter，逻辑关联非外键）
		 */
		userId?: BigInt;

		/**
		 * 评分（1-5）
		 */
		rating?: number;

		/**
		 * 评价内容
		 */
		content?: string;

		/**
		 * 晒单图片URL数组
		 */
		images?: string;

		/**
		 * 状态（PintuanReviewStatusEnum）
		 */
		status?: number;

		/**
		 * 下架原因
		 */
		remark?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface PromoteCopywritingEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 内容
		 */
		content?: string;

		/**
		 * 渲染缓存
		 */
		cache?: any;

		/**
		 * 所属项目
		 */
		projectId?: number;

		/**
		 * 文案类型
		 */
		type?: string;

		/**
		 * 所属用户Id
		 */
		userId?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface SaltfishScripBugEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 描述
		 */
		description?: string;

		/**
		 * 日志
		 */
		log?: longtext;

		/**
		 * 布局
		 */
		layout?: any;

		/**
		 * 截图
		 */
		screenshot?: string;

		/**
		 * 设备名称
		 */
		deviceName?: string;

		/**
		 * 用户
		 */
		userId?: number;

		/**
		 * 基座版本
		 */
		appVersion?: string;

		/**
		 * 脚本版本
		 */
		scriptVersion?: string;

		/**
		 * 受控App包名
		 */
		packageName?: string;

		/**
		 * activity
		 */
		activity?: string;

		/**
		 * 受控App版本
		 */
		versionName?: string;

		/**
		 * 是否修复
		 */
		isFixed?: boolean;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BlogArticleEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 标题
		 */
		title?: string;

		/**
		 * 别名 / 短链接 slug
		 */
		alias?: string;

		/**
		 * 摘要
		 */
		summary?: string;

		/**
		 * 正文（Markdown）
		 */
		content?: longtext;

		/**
		 * 封面图
		 */
		cover?: string;

		/**
		 * 作者ID（aios-ucenter）
		 */
		userId?: number;

		/**
		 * 分类ID
		 */
		categoryId?: number;

		/**
		 * 标签ID列表（逗号分隔）
		 */
		tagIds?: string;

		/**
		 * 阅读数
		 */
		readCount?: number;

		/**
		 * 字数
		 */
		wordCount?: number;

		/**
		 * 是否置顶
		 */
		isTop?: boolean;

		/**
		 * 状态
		 */
		status?: string;

		/**
		 * 排序
		 */
		sort?: number;

		/**
		 * 发布时间
		 */
		publishTime?: Date;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BlogCommentEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 文章ID
		 */
		articleId?: number;

		/**
		 * 用户ID（aios-ucenter）
		 */
		userId?: number;

		/**
		 * 评论内容
		 */
		content?: string;

		/**
		 * 父级评论ID，0 为一级评论
		 */
		parentId?: number;

		/**
		 * 点赞数
		 */
		likeCount?: number;

		/**
		 * 状态
		 */
		status?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ForumActivityEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 主题ID（对应 thread.id）
		 */
		tid?: number;

		/**
		 * 发起人用户ID（对应 ucenter_member.id）
		 */
		userId?: number;

		/**
		 * 活动图片附件ID
		 */
		aid?: number;

		/**
		 * 费用预估（元，X5 activity.cost；>0 时报名表单出现费用自报选项）
		 */
		cost?: number;

		/**
		 * 活动开始时间
		 */
		startTimeFrom?: Date;

		/**
		 * 活动结束时间
		 */
		startTimeTo?: Date;

		/**
		 * 活动地点
		 */
		place?: string;

		/**
		 * 活动分类
		 */
		class?: string;

		/**
		 * 性别限制 0-不限 1-男 2-女
		 */
		gender?: number;

		/**
		 * 人数上限
		 */
		number?: number;

		/**
		 * 当前报名数
		 */
		applynumber?: number;

		/**
		 * 报名截止时间
		 */
		expireTime?: Date;

		/**
		 * 自定义报名字段（序列化）
		 */
		ufield?: string;

		/**
		 * 报名需要积分（X5 activity.credit，报名提交时扣减——BL 期注释误作奖励，切片BV 纠正语义）
		 */
		credit?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ForumAnnouncementEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 发布者用户名
		 */
		author?: string;

		/**
		 * 公告标题
		 */
		subject?: string;

		/**
		 * 类型 0-文字 1-链接 2-公共短消息
		 */
		type?: number;

		/**
		 * 排序权重（值小靠前）
		 */
		displayorder?: number;

		/**
		 * 开始时间
		 */
		startTime?: Date;

		/**
		 * 结束时间（null=永久）
		 */
		endTime?: Date;

		/**
		 * 公告内容（type=0 正文 / type=1 URL）
		 */
		message?: string;

		/**
		 * 可见用户组（逗号分隔，空=全部）
		 */
		groups?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ForumAttachmentEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 主题ID（0=暂存未绑定）
		 */
		tid?: number;

		/**
		 * 帖子ID（0=暂存未绑定）
		 */
		pid?: number;

		/**
		 * 上传用户ID
		 */
		userId?: number;

		/**
		 * 文件名（展示用原始名）
		 */
		filename?: string;

		/**
		 * 文件大小（字节）
		 */
		filesize?: number;

		/**
		 * 下载次数
		 */
		downloads?: number;

		/**
		 * 是否图片 1-是 0-否
		 */
		isimage?: number;

		/**
		 * 价格（积分）
		 */
		price?: number;

		/**
		 * 存储相对路径（pDataPath()/attach 下）
		 */
		attachment?: string;

		/**
		 * 文件扩展名
		 */
		filetype?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ForumBbcodeEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 可用性 0-禁用 1-可用 2-编辑器显示
		 */
		available?: number;

		/**
		 * 标签名（[tag]...[/tag]）
		 */
		tag?: string;

		/**
		 * 编辑器按钮图标
		 */
		icon?: string;

		/**
		 * HTML 模板（{1}{2}{3} 占位参数）
		 */
		replacement?: string;

		/**
		 * 示例
		 */
		example?: string;

		/**
		 * 说明
		 */
		explanation?: string;

		/**
		 * 参数个数 1-3
		 */
		params?: number;

		/**
		 * 编辑器提示
		 */
		prompt?: string;

		/**
		 * 嵌套层数 1-3
		 */
		nest?: number;

		/**
		 * 编辑器排序
		 */
		displayorder?: number;

		/**
		 * 制表符分隔用户组ID（占位）
		 */
		perm?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ForumCollectionCommentEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 淘帖ID（对应 forum_collection.id）
		 */
		ctid?: number;

		/**
		 * 评论者ID（对应 ucenter_member.id）
		 */
		userId?: number;

		/**
		 * 评论者用户名（冗余）
		 */
		username?: string;

		/**
		 * 评论内容
		 */
		message?: string;

		/**
		 * 评论IP
		 */
		useip?: string;

		/**
		 * 端口
		 */
		port?: smallint;

		/**
		 * 评分 0-5（0=未评分）
		 */
		rate?: float;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ForumCollectionFollowEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 关注者ID（对应 ucenter_member.id）
		 */
		userId?: number;

		/**
		 * 关注者用户名（冗余）
		 */
		username?: string;

		/**
		 * 淘帖ID（对应 forum_collection.id）
		 */
		ctid?: number;

		/**
		 * 关注者最后访问
		 */
		lastvisitTime?: Date;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ForumCollectionInviteEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 淘帖ID（对应 forum_collection.id）
		 */
		ctid?: number;

		/**
		 * 被邀请者ID（对应 ucenter_member.id）
		 */
		userId?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ForumCollectionEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建者ID（对应 ucenter_member.id）
		 */
		userId?: number;

		/**
		 * 创建者用户名（冗余）
		 */
		username?: string;

		/**
		 * 淘帖名
		 */
		name?: string;

		/**
		 * 简介（原 desc，保留字改名）
		 */
		description?: string;

		/**
		 * 关键词（逗号/空格分隔）
		 */
		keyword?: string;

		/**
		 * 封面图标志 0-无 1-有
		 */
		cover?: number;

		/**
		 * 图标标志 0-无 1-有
		 */
		icon?: number;

		/**
		 * 最后访问时间
		 */
		lastvisitTime?: Date;

		/**
		 * 收录主题数（冗余）
		 */
		threadnum?: number;

		/**
		 * 关注数（冗余）
		 */
		follownum?: number;

		/**
		 * 评论数（冗余）
		 */
		commentnum?: number;

		/**
		 * 平均评分
		 */
		rate?: float;

		/**
		 * 评分人数
		 */
		ratenum?: number;

		/**
		 * 最后收录主题 tid
		 */
		lastpost?: number;

		/**
		 * 最后收录主题标题
		 */
		lastsubject?: string;

		/**
		 * 最后收录时间
		 */
		lastpostTime?: Date;

		/**
		 * 最后收录主题作者
		 */
		lastposter?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ForumDebateEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 主题ID（对应 thread.id）
		 */
		tid?: number;

		/**
		 * 发起人用户ID（对应 ucenter_member.id）
		 */
		userId?: number;

		/**
		 * 开始时间
		 */
		startTime?: Date;

		/**
		 * 结束时间
		 */
		endTime?: Date;

		/**
		 * 正方辩手数
		 */
		affirmdebaters?: number;

		/**
		 * 反方辩手数
		 */
		negadebaters?: number;

		/**
		 * 正方支持票
		 */
		affirmvotes?: number;

		/**
		 * 反方支持票
		 */
		negavotes?: number;

		/**
		 * 裁判用户名
		 */
		umpire?: string;

		/**
		 * 结果 0-平局 1-正方胜 2-反方胜
		 */
		winner?: number;

		/**
		 * 最佳辩手（制表符串）
		 */
		bestdebater?: string;

		/**
		 * 正方立论
		 */
		affirmpoint?: string;

		/**
		 * 反方立论
		 */
		negapoint?: string;

		/**
		 * 裁判评语
		 */
		umpirepoint?: string;

		/**
		 * 正方投票用户ID串
		 */
		affirmvoterids?: string;

		/**
		 * 反方投票用户ID串
		 */
		negavoterids?: string;

		/**
		 * 正方回复数
		 */
		affirmreplies?: number;

		/**
		 * 反方回复数
		 */
		negareplies?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ForumFavoriteEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 主题ID
		 */
		threadId?: number;

		/**
		 * 用户ID（aios-ucenter）
		 */
		userId?: number;

		/**
		 * 收藏夹（可选分组）
		 */
		folder?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ForumForumEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 父版块ID（0=顶级）
		 */
		fup?: number;

		/**
		 * 版块类型 group-群组 forum-版块 sub-子版块
		 */
		type?: string;

		/**
		 * 版块名称
		 */
		name?: string;

		/**
		 * 别名 / slug
		 */
		alias?: string;

		/**
		 * 版块描述
		 */
		description?: string;

		/**
		 * 图标
		 */
		icon?: string;

		/**
		 * 排序
		 */
		displayOrder?: number;

		/**
		 * 状态 0-关闭 1-正常 3-群组
		 */
		status?: number;

		/**
		 * 是否显示
		 */
		isShow?: boolean;

		/**
		 * 主题数（冗余）
		 */
		threads?: number;

		/**
		 * 帖子数（冗余）
		 */
		posts?: number;

		/**
		 * 今日主题数（冗余）
		 */
		todayPosts?: number;

		/**
		 * 最后发帖信息（userId	imestamp	tid	subject 制表符分隔，冗余）
		 */
		lastPost?: string;

		/**
		 * 版主 userId 列表（逗号分隔，冗余）
		 */
		moderators?: string;

		/**
		 * 允许发帖 1-是 0-否
		 */
		allowPost?: number;

		/**
		 * 允许浏览 1-是 0-否
		 */
		allowView?: number;

		/**
		 * 是否简化版（无主题列表）
		 */
		simple?: number;

		/**
		 * 风格模板
		 */
		styleId?: number;

		/**
		 * 群组等级 levelid（-1=待审核，>=0 为 grouplevel.levelid）
		 */
		level?: number;

		/**
		 * 群组积分（每用户每天每群组首次发帖/回复 +1）
		 */
		commoncredits?: number;

		/**
		 * 推荐位（群组推荐排序）
		 */
		recommend?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ForumHotreplyNumberEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 被投回复ID
		 */
		pid?: number;

		/**
		 * 主题ID
		 */
		tid?: number;

		/**
		 * 支持数
		 */
		support?: smallint;

		/**
		 * 反对数
		 */
		against?: smallint;

		/**
		 * 总票数
		 */
		total?: mediumint;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ForumLikeEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 目标类型（thread/post）
		 */
		targetType?: string;

		/**
		 * 目标ID
		 */
		targetId?: number;

		/**
		 * 用户ID（aios-ucenter）
		 */
		userId?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CommonMagicEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 道具标识（X5 identifier，对应注册表键）
		 */
		identifier?: string;

		/**
		 * 是否上架（X5 available）
		 */
		isAvailable?: boolean;

		/**
		 * 道具名称（X5 name）
		 */
		name?: string;

		/**
		 * 道具说明（X5 description）
		 */
		description?: string;

		/**
		 * 货架排序（X5 displayorder，大者前）
		 */
		displayorder?: number;

		/**
		 * 售价（积分，X5 price）
		 */
		price?: number;

		/**
		 * 库存（X5 num，0=无库存不售；自动补货看 supplytype）
		 */
		num?: number;

		/**
		 * 累计销量（X5 salevolume，热门货架排序键）
		 */
		salevolume?: number;

		/**
		 * 自动补货周期（X5 supplytype 0=否 1=每日 2=每周一 3=每月1日）
		 */
		supplytype?: number;

		/**
		 * 自动补货至数量（X5 supplynum）
		 */
		supplynum?: number;

		/**
		 * 使用周期限制（X5 useperoid 0=不限 1=每日 2=每周 3=每月 4=每24h）
		 */
		useperoid?: number;

		/**
		 * 周期内最多使用次数（X5 usenum，配合 useperoid）
		 */
		usenum?: number;

		/**
		 * 背包重量（X5 weight，占 maxmagicsweight 组额度）
		 */
		weight?: number;

		/**
		 * 可用限制（X5 magicperm json：{fids:[],usergroups:[]}，空=不限）
		 */
		magicperm?: any;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ForumMedalEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 勋章名
		 */
		name?: string;

		/**
		 * 是否启用 0-否 1-是
		 */
		available?: number;

		/**
		 * 图标文件名或URL
		 */
		image?: string;

		/**
		 * 获得方式 0-管理员授予 1-自动申请 2-申请审核
		 */
		type?: number;

		/**
		 * 排序（越小越靠前）
		 */
		displayorder?: number;

		/**
		 * 说明
		 */
		description?: string;

		/**
		 * 有效天数（0=永久）
		 */
		expiration?: smallint;

		/**
		 * 序列化资格公式（判定延后到 ucenter 成员体系）
		 */
		permission?: mediumtext;

		/**
		 * 购买积分币种（Discuz extcredits 下标 1-8；0=回退全局槽 creditstransextra[3]）
		 */
		credit?: number;

		/**
		 * 积分价格（0=免费）
		 */
		price?: mediumint;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ForumThreadEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 版块/群组ID（对应 forum.id）
		 */
		fid?: number;

		/**
		 * 作者用户ID（对应 ucenter_member.id）
		 */
		authorId?: number;

		/**
		 * 作者用户名（冗余）
		 */
		authorName?: string;

		/**
		 * 主题标题
		 */
		subject?: string;

		/**
		 * 摘要/导读
		 */
		summary?: string;

		/**
		 * 主题类型（占位枚举值）
		 */
		type?: string;

		/**
		 * 分类信息 ID（对应 forum_threadtype.id，0=未使用）
		 */
		sortid?: number;

		/**
		 * 发帖分类 ID（对应 forum_threadclass.id，0=未分类，X5 typeid）
		 */
		typeid?: number;

		/**
		 * 置顶等级 0-正常 1-版块 2-分类 3-全局 负值-回收站
		 */
		displayorder?: number;

		/**
		 * 精华等级 0-否 1~3
		 */
		digest?: number;

		/**
		 * 是否高亮
		 */
		highlight?: number;

		/**
		 * 是否群组主题
		 */
		isgroup?: number;

		/**
		 * 是否隐藏（审核中/回收）
		 */
		hidden?: number;

		/**
		 * 特殊主题 0-普通 1-投票 2-商品 3-悬赏 4-活动 5-辩论
		 */
		special?: number;

		/**
		 * 阅读权限（0=所有人）
		 */
		readPerm?: number;

		/**
		 * 价格（收费主题，积分）
		 */
		price?: number;

		/**
		 * 关闭状态 0-开放 >0 关闭(或到期时间戳)
		 */
		closed?: number;

		/**
		 * 回帖奖励积分
		 */
		replyCredit?: number;

		/**
		 * 浏览数（冗余）
		 */
		views?: number;

		/**
		 * 回帖数（冗余）
		 */
		replies?: number;

		/**
		 * 最大楼层位置（冗余）
		 */
		maxPosition?: number;

		/**
		 * 最后发帖用户ID
		 */
		lastPosterId?: number;

		/**
		 * 最后发帖用户名（冗余）
		 */
		lastPosterName?: string;

		/**
		 * 最后发帖时间（冗余）
		 */
		lastPostTime?: Date;

		/**
		 * 状态 0-正常 1-待审核 2-已删除 3-已忽略
		 */
		status?: number;

		/**
		 * 是否抢楼帖 1-是 0-否
		 */
		rushreply?: number;

		/**
		 * 作者是否接收回帖通知 1-是 0-否（X5 thread.status bit6 allownoticeauthor；本站 status 列已被枚举占用，故独立成列）
		 */
		noticeauthor?: number;

		/**
		 * 是否有置顶回复 1-是 0-否
		 */
		stickreply?: number;

		/**
		 * 评分章（X5 thread.stamp：smiley type=stamp 行 id，-1=无章；X5 以 displayorder 为数组索引，本站以行 id 为准——偏离落档）
		 */
		stamp?: number;

		/**
		 * 主题图标（X5 thread.icon：图章组 smiley type=stamplist 行 id，-1=无；列表行图章展示位）
		 */
		icon?: number;

		/**
		 * 推荐净加权分（可负）
		 */
		recommends?: smallint;

		/**
		 * 推荐/支持次数
		 */
		recommendAdd?: smallint;

		/**
		 * 反对次数
		 */
		recommendSub?: smallint;

		/**
		 * 封面标志 0-无 >0-本地 <0-远程
		 */
		cover?: smallint;

		/**
		 * 相关主题缓存（占位）
		 */
		relatebytag?: char;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ForumPollEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 主题ID（对应 thread.id）
		 */
		tid?: number;

		/**
		 * 是否公开投票 0-否 1-是
		 */
		overt?: number;

		/**
		 * 是否多选 0-单选 1-多选
		 */
		multiple?: number;

		/**
		 * 投票后可见 0-公开 1-投票后可见
		 */
		visible?: number;

		/**
		 * 最多可选数
		 */
		maxchoices?: number;

		/**
		 * 是否图片投票 0-否 1-是
		 */
		isimage?: number;

		/**
		 * 截止时间
		 */
		expireTime?: Date;

		/**
		 * 选项预览
		 */
		pollpreview?: string;

		/**
		 * 投票人数
		 */
		voters?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ForumPostcommentEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 被点评楼层ID（对应 forum_post.id）
		 */
		pid?: number;

		/**
		 * 点评人用户ID（对应 ucenter_member.id）
		 */
		userId?: number;

		/**
		 * 点评内容
		 */
		content?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ForumPostEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 主题ID（对应 thread.id）
		 */
		tid?: number;

		/**
		 * 版块ID（冗余，对应 forum.id）
		 */
		fid?: number;

		/**
		 * 楼层位置（1=首帖，自增）
		 */
		position?: number;

		/**
		 * 回复目标帖ID（0=普通楼层）
		 */
		repid?: number;

		/**
		 * 是否首帖 1-是 0-否
		 */
		first?: number;

		/**
		 * 作者用户ID（对应 ucenter_member.id）
		 */
		authorId?: number;

		/**
		 * 作者用户名（冗余）
		 */
		authorName?: string;

		/**
		 * 帖子内容
		 */
		message?: string;

		/**
		 * 是否匿名 1-是 0-否
		 */
		anonymous?: number;

		/**
		 * 状态 0-正常 >0 删除(或审核中) 负值-回收
		 */
		invisible?: number;

		/**
		 * 是否使用 HTML
		 */
		useHtml?: number;

		/**
		 * 是否使用 Smiley
		 */
		useSmiley?: number;

		/**
		 * 是否使用 BBcode
		 */
		useBbcode?: number;

		/**
		 * 楼层内点评数（冗余）
		 */
		comment?: number;

		/**
		 * 评分次数（冗余）
		 */
		rate?: number;

		/**
		 * 状态位（位运算：1-已警告 2-已审核）
		 */
		status?: number;

		/**
		 * IP 地址
		 */
		ip?: string;

		/**
		 * 是否通过审核 1-是 0-否
		 */
		isAudited?: number;

		/**
		 * 端口
		 */
		port?: number;

		/**
		 * 最后编辑时间
		 */
		editTime?: Date;

		/**
		 * 最后编辑用户ID
		 */
		editUserId?: number;

		/**
		 * 是否最佳答案 0-否 1-是（悬赏结案标记）
		 */
		bestanswer?: number;

		/**
		 * 该楼获得回帖奖励积分（0=未获得）
		 */
		replycredit?: number;

		/**
		 * 标签串（tagid,tagname\t 重复段）
		 */
		tags?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ForumRatelogEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 被评分的帖子ID（对应 post.id）
		 */
		pid?: number;

		/**
		 * 评分人用户ID（aios-ucenter）
		 */
		userId?: number;

		/**
		 * 评分分值（正负皆可）
		 */
		score?: number;

		/**
		 * 评分理由
		 */
		reason?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ForumMemberrecommendEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 主题ID
		 */
		tid?: number;

		/**
		 * 推荐用户ID
		 */
		recommendUid?: mediumint;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ForumReportEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 举报目标类型（thread/post/blog/album/pic，ForumReportTargetEnum）
		 */
		targetType?: string;

		/**
		 * 举报目标ID
		 */
		targetId?: number;

		/**
		 * 归属版块（post/thread 型服务端反查 fid，版主名单通知与过滤用；其余 0）
		 */
		fid?: number;

		/**
					 * 举报理由（首报+追加，
 分隔，单条 ≤200 经词表过滤）
					 */
		reason?: string;

		/**
		 * 举报人用户ID（aios-ucenter）
		 */
		reporterId?: number;

		/**
		 * 举报人用户名快照（X5 username 列）
		 */
		reporterName?: string;

		/**
		 * 重复举报次数（X5 num，首报 0）
		 */
		num?: number;

		/**
		 * 处理状态 0-待处理 1-已处理 2-已忽略
		 */
		status?: number;

		/**
		 * 处理人用户ID（X5 opuid，0=未处理）
		 */
		opUserId?: number;

		/**
		 * 处理人用户名快照（X5 opname）
		 */
		opUserName?: string;

		/**
		 * 处理时间（X5 optime，unix 秒；0=未处理）
		 */
		opTime?: number;

		/**
		 * 处理结果（X5 opresult：ignore=不奖励 或 带符号积分数值；未处理空串）
		 */
		opResult?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ForumThreadrushEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 主题ID（对应 forum_thread.id）
		 */
		tid?: number;

		/**
		 * 截止楼层（到达后关帖，0=不限）
		 */
		stopfloor?: mediumint;

		/**
		 * 抢楼开始时间（null=不限）
		 */
		startTime?: Date;

		/**
		 * 抢楼结束时间（null=不限）
		 */
		endTime?: Date;

		/**
		 * 奖励楼层（逗号分隔，* 通配）
		 */
		rewardfloor?: string;

		/**
		 * 参与积分下限（-996=不限）
		 */
		creditlimit?: number;

		/**
		 * 每人回复次数上限（0=不限）
		 */
		replylimit?: smallint;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CommonTagEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 标签名
		 */
		tagName?: string;

		/**
		 * 状态 0正常 1关闭 3用户标签
		 */
		status?: number;

		/**
		 * 关联内容数
		 */
		relatedCount?: number;

		/**
		 * 热度分
		 */
		hotScore?: float;

		/**
		 * 上次热度重算时间
		 */
		hotUpdateTime?: Date;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ForumThreadimageEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 主题ID
		 */
		tid?: number;

		/**
		 * 封面原图附件文件名
		 */
		attachment?: string;

		/**
		 * 0本地 / 1远程（占位）
		 */
		remote?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ForumTradeEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 主题ID（对应 thread.id）
		 */
		tid?: number;

		/**
		 * 商品楼层ID（对应 post.id）
		 */
		pid?: number;

		/**
		 * 商品分类ID
		 */
		typeid?: number;

		/**
		 * 卖家用户ID（对应 ucenter_member.id）
		 */
		sellerid?: number;

		/**
		 * 卖家用户名
		 */
		seller?: string;

		/**
		 * 收款账号
		 */
		account?: string;

		/**
		 * 财付通账号
		 */
		tenpayaccount?: string;

		/**
		 * 商品名
		 */
		subject?: string;

		/**
		 * undefined
		 */
		price?: number;

		/**
		 * 库存数量
		 */
		amount?: number;

		/**
		 * 成色/新旧
		 */
		quality?: number;

		/**
		 * 所在地
		 */
		locus?: string;

		/**
		 * 物流方式 0-线下 1-卖家 2-买家 3-虚拟 4-物流
		 */
		transport?: number;

		/**
		 * 平邮费
		 */
		ordinaryfee?: number;

		/**
		 * 快递费
		 */
		expressfee?: number;

		/**
		 * EMS费
		 */
		emsfee?: number;

		/**
		 * 商品类型
		 */
		itemtype?: number;

		/**
		 * 过期时间
		 */
		expireTime?: Date;

		/**
		 * 最后买家
		 */
		lastbuyer?: string;

		/**
		 * 累计售出
		 */
		totalitems?: number;

		/**
		 * undefined
		 */
		tradesum?: number;

		/**
		 * 是否关闭 0-否 1-是
		 */
		closed?: number;

		/**
		 * 商品图附件ID
		 */
		aid?: number;

		/**
		 * 排序
		 */
		displayorder?: number;

		/**
		 * undefined
		 */
		costprice?: number;

		/**
		 * 积分价格
		 */
		credit?: number;

		/**
		 * 消耗积分
		 */
		costcredit?: number;

		/**
		 * 积分成交总额
		 */
		credittradesum?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ForumGroupuserEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 群组ID（对应 forum.id，type=sub&status=3）
		 */
		fid?: number;

		/**
		 * 用户ID（对应 ucenter_member.id）
		 */
		userId?: number;

		/**
		 * 用户名（冗余）
		 */
		username?: string;

		/**
		 * 成员等级 0-待审核 1-群主 2-副群主 3-明星成员 4-普通成员
		 */
		level?: number;

		/**
		 * 主题数（冗余）
		 */
		threads?: number;

		/**
		 * 回复数（冗余）
		 */
		replies?: number;

		/**
		 * 加入时间
		 */
		joinTime?: Date;

		/**
		 * 隐私设置 0-公开 1-隐藏
		 */
		privacy?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface HomeAlbumEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 用户ID（对应 ucenter_member.id）
		 */
		userId?: number;

		/**
		 * 用户名（冗余）
		 */
		username?: string;

		/**
		 * 相册名称
		 */
		albumname?: string;

		/**
		 * 分类ID
		 */
		catid?: number;

		/**
		 * 图片数
		 */
		picnum?: number;

		/**
		 * 封面图
		 */
		pic?: string;

		/**
		 * 封面标记 1-有 0-无
		 */
		picflag?: number;

		/**
		 * 可见范围 0-公开 1-好友 2-私密
		 */
		friend?: number;

		/**
		 * 访问密码
		 */
		password?: string;

		/**
		 * 收藏数
		 */
		favtimes?: number;

		/**
		 * 分享数
		 */
		sharetimes?: number;

		/**
		 * 相册描述
		 */
		depict?: string;

		/**
		 * 指定可见用户（friend=2，逗号分隔 userId）
		 */
		targetIds?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface HomeBlogEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 作者用户ID（对应 ucenter_member.id）
		 */
		userId?: number;

		/**
		 * 作者用户名（冗余）
		 */
		username?: string;

		/**
		 * 日志标题
		 */
		subject?: string;

		/**
		 * 日志分类ID
		 */
		classid?: number;

		/**
		 * 系统分类ID
		 */
		catid?: number;

		/**
		 * 浏览数
		 */
		viewnum?: number;

		/**
		 * 回复数
		 */
		replynum?: number;

		/**
		 * 热度
		 */
		hot?: number;

		/**
		 * 封面标记 1-有 0-无
		 */
		picflag?: number;

		/**
		 * 禁止回复 1-是 0-否
		 */
		noreply?: number;

		/**
		 * 可见范围 0公开/1好友/2指定用户/3仅自己/4密码
		 */
		friend?: number;

		/**
		 * 访问密码
		 */
		password?: string;

		/**
		 * 收藏数
		 */
		favtimes?: number;

		/**
		 * 分享数
		 */
		sharetimes?: number;

		/**
		 * 状态 0正常/1待审核/2忽略/-1回收站
		 */
		status?: number;

		/**
		 * 点击1
		 */
		click1?: number;

		/**
		 * 点击2
		 */
		click2?: number;

		/**
		 * 点击3
		 */
		click3?: number;

		/**
		 * 点击4
		 */
		click4?: number;

		/**
		 * 点击5
		 */
		click5?: number;

		/**
		 * 点击6
		 */
		click6?: number;

		/**
		 * 点击7
		 */
		click7?: number;

		/**
		 * 点击8
		 */
		click8?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface HomeClickEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 表态名称（如 顶/踩）
		 */
		name?: string;

		/**
		 * 图标（static/image/click/ 下文件名或 URL）
		 */
		icon?: string;

		/**
		 * 对象类型（blogid/picid/aid）
		 */
		idtype?: string;

		/**
		 * 是否启用
		 */
		available?: number;

		/**
		 * 显示顺序
		 */
		displayorder?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface HomeCommentEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 内容所有者ID
		 */
		userId?: number;

		/**
		 * 被评论对象ID
		 */
		objectId?: number;

		/**
		 * 对象类型（userId/picid/blogid/sid）
		 */
		idtype?: string;

		/**
		 * 评论者ID
		 */
		authorid?: number;

		/**
		 * 评论者用户名（冗余）
		 */
		author?: string;

		/**
		 * IP
		 */
		ip?: string;

		/**
		 * 端口
		 */
		port?: number;

		/**
		 * 评论内容
		 */
		message?: string;

		/**
		 * 霓虹灯魔法标记
		 */
		magicflicker?: number;

		/**
		 * 状态 0正常/1待审/2忽略/-1回收站
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface HomeDocommentEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 上级点评ID（0=根）
		 */
		upid?: number;

		/**
		 * 所属说说ID
		 */
		doid?: number;

		/**
		 * 点评者ID
		 */
		userId?: number;

		/**
		 * 点评者用户名
		 */
		username?: string;

		/**
		 * 点评内容
		 */
		message?: string;

		/**
		 * IP
		 */
		ip?: string;

		/**
		 * 端口
		 */
		port?: number;

		/**
		 * 层级 1=根点评 2=回复
		 */
		grade?: number;

		/**
		 * 回复数（X5.0 无维护，保留）
		 */
		replynum?: number;

		/**
		 * 推荐数（X5.0 无维护，保留）
		 */
		recomends?: number;

		/**
		 * 状态
		 */
		status?: number;

		/**
		 * 附加 JSON
		 */
		fields?: any;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface HomeDoingEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 关联ID
		 */
		itemid?: number;

		/**
		 * 类型
		 */
		type?: string;

		/**
		 * 用户ID（对应 ucenter_member.id）
		 */
		userId?: number;

		/**
		 * 用户名（冗余）
		 */
		username?: string;

		/**
		 * 来源
		 */
		from?: string;

		/**
		 * 正文模板
		 */
		bodyTemplate?: string;

		/**
		 * 正文数据（JSON）
		 */
		bodyData?: string;

		/**
		 * 消息内容
		 */
		message?: string;

		/**
		 * IP
		 */
		ip?: string;

		/**
		 * 端口
		 */
		port?: number;

		/**
		 * 回复数
		 */
		replynum?: number;

		/**
		 * 推荐数
		 */
		recomends?: number;

		/**
		 * 分享数
		 */
		sharetimes?: number;

		/**
		 * 收藏数
		 */
		favtimes?: number;

		/**
		 * 状态 0-正常 1-待审 2-删除
		 */
		status?: number;

		/**
		 * 附加字段 {at:{atuid:atusername}, tags:{tagid:tagname}}
		 */
		fields?: any;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface HomeFavoriteEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 收藏者ID
		 */
		userId?: number;

		/**
		 * 收藏对象ID
		 */
		objectId?: number;

		/**
		 * 对象类型（tid/fid/blogid/gid/albumid/userId/aid）
		 */
		idtype?: string;

		/**
		 * 内容所有者ID
		 */
		spaceuid?: number;

		/**
		 * 收藏标题
		 */
		title?: string;

		/**
		 * 收藏备注
		 */
		description?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface HomeFeedEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 图标标识
		 */
		icon?: string;

		/**
		 * 用户ID（对应 ucenter_member.id）
		 */
		userId?: number;

		/**
		 * 用户名（冗余）
		 */
		username?: string;

		/**
		 * 可见范围 0-所有人 1-好友
		 */
		friend?: number;

		/**
		 * 模板哈希
		 */
		hashTemplate?: string;

		/**
		 * 数据哈希
		 */
		hashData?: string;

		/**
		 * 标题模板
		 */
		titleTemplate?: string;

		/**
		 * 标题数据（JSON）
		 */
		titleData?: string;

		/**
		 * 正文模板
		 */
		bodyTemplate?: string;

		/**
		 * 正文数据（JSON）
		 */
		bodyData?: string;

		/**
		 * 通用正文
		 */
		bodyGeneral?: string;

		/**
		 * 图片1
		 */
		image1?: string;

		/**
		 * 图片1链接
		 */
		image1Link?: string;

		/**
		 * 图片2
		 */
		image2?: string;

		/**
		 * 图片2链接
		 */
		image2Link?: string;

		/**
		 * 图片3
		 */
		image3?: string;

		/**
		 * 图片3链接
		 */
		image3Link?: string;

		/**
		 * 图片4
		 */
		image4?: string;

		/**
		 * 图片4链接
		 */
		image4Link?: string;

		/**
		 * 关联对象ID（如 blogid/picid/sid）
		 */
		objectId?: number;

		/**
		 * 关联对象类型
		 */
		idtype?: string;

		/**
		 * 可见目标用户（逗号分隔）
		 */
		targetIds?: string;

		/**
		 * 热度
		 */
		hot?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface HomeFollowEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 用户ID（关注者，对应 ucenter_member.id）
		 */
		userId?: number;

		/**
		 * 用户名（冗余）
		 */
		username?: string;

		/**
		 * 被关注用户ID
		 */
		followuid?: number;

		/**
		 * 被关注用户名（冗余）
		 */
		fusername?: string;

		/**
		 * 分组名（备用）
		 */
		bkname?: string;

		/**
		 * 状态 0-正常 1-取消
		 */
		status?: number;

		/**
		 * 是否互相关注 1-是 0-否
		 */
		mutual?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CommonInviteEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 邀请人用户ID
		 */
		userId?: number;

		/**
		 * 邀请码（6位小写随机，唯一索引，碰撞重试）
		 */
		code?: string;

		/**
		 * 接受邀请的用户ID（0=未被接受）
		 */
		fuid?: number;

		/**
		 * 接受邀请的用户名
		 */
		fusername?: string;

		/**
		 * 邮件邀请的目标邮箱（type=1）
		 */
		email?: string;

		/**
		 * 类型：0=邀请码 1=邮件邀请
		 */
		type?: number;

		/**
		 * 状态：0=未用 2=已使用 3=邮件已发
		 */
		status?: number;

		/**
		 * 发出邀请时的 IP
		 */
		inviteip?: string;

		/**
		 * 过期时间（null=不限期，X5 endtime=0 语义）
		 */
		endtime?: Date;

		/**
		 * 被使用（注册/接受）时间
		 */
		regdateline?: Date;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface HomePicEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 相册ID
		 */
		albumid?: number;

		/**
		 * 作者ID
		 */
		userId?: number;

		/**
		 * 作者名
		 */
		username?: string;

		/**
		 * 上传IP
		 */
		postip?: string;

		/**
		 * 端口
		 */
		port?: number;

		/**
		 * 原文件名
		 */
		filename?: string;

		/**
		 * 图片标题
		 */
		title?: string;

		/**
		 * 文件扩展类型
		 */
		type?: string;

		/**
		 * 大小
		 */
		size?: number;

		/**
		 * 存储路径
		 */
		filepath?: string;

		/**
		 * 是否生成缩略图
		 */
		thumb?: number;

		/**
		 * 是否远程（>1 来源论坛附件）
		 */
		remote?: number;

		/**
		 * 热度
		 */
		hot?: number;

		/**
		 * 分享数
		 */
		sharetimes?: number;

		/**
		 * 点击1
		 */
		click1?: number;

		/**
		 * 点击2
		 */
		click2?: number;

		/**
		 * 点击3
		 */
		click3?: number;

		/**
		 * 点击4
		 */
		click4?: number;

		/**
		 * 点击5
		 */
		click5?: number;

		/**
		 * 点击6
		 */
		click6?: number;

		/**
		 * 点击7
		 */
		click7?: number;

		/**
		 * 点击8
		 */
		click8?: number;

		/**
		 * 相框魔法
		 */
		magicframe?: number;

		/**
		 * 状态 0正常/1待审/2忽略/-1回收站
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface HomePokeEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 被打招呼者用户ID
		 */
		userId?: number;

		/**
		 * 打招呼者用户ID
		 */
		fromuid?: number;

		/**
		 * 打招呼者用户名（冗余）
		 */
		fromusername?: string;

		/**
		 * 打招呼内容
		 */
		note?: string;

		/**
		 * 动作图标ID
		 */
		iconid?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface HomeShareEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 关联ID
		 */
		itemid?: number;

		/**
		 * 类型
		 */
		type?: string;

		/**
		 * 分享者用户ID
		 */
		userId?: number;

		/**
		 * 分享者用户名（冗余）
		 */
		username?: string;

		/**
		 * 来源用户ID
		 */
		fromuid?: number;

		/**
		 * 标题模板
		 */
		titleTemplate?: string;

		/**
		 * 正文模板
		 */
		bodyTemplate?: string;

		/**
		 * 正文数据（JSON）
		 */
		bodyData?: string;

		/**
		 * 通用正文
		 */
		bodyGeneral?: string;

		/**
		 * 图片
		 */
		image?: string;

		/**
		 * 图片链接
		 */
		imageLink?: string;

		/**
		 * 热度
		 */
		hot?: number;

		/**
		 * 热度用户（逗号分隔 userId）
		 */
		hotuser?: string;

		/**
		 * 状态 0正常/1待审/2忽略/-1回收站
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface HomeShowEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 用户ID
		 */
		userId?: number;

		/**
		 * 用户名（冗余）
		 */
		username?: string;

		/**
		 * 单价（排序第一键）
		 */
		unitprice?: number;

		/**
		 * 竞价积分总额
		 */
		credit?: number;

		/**
		 * 上榜宣言
		 */
		note?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CommonMemberFieldHomeEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 用户ID
		 */
		userId?: number;

		/**
		 * 空间名
		 */
		spacename?: string;

		/**
		 * 空间描述
		 */
		spacedescription?: string;

		/**
		 * 自定义域名（占位）
		 */
		domain?: string;

		/**
		 * 额外空间容量
		 */
		addsize?: number;

		/**
		 * 额外好友名额
		 */
		addfriend?: number;

		/**
		 * 是否允许加好友 1/0
		 */
		allowasfriend?: number;

		/**
		 * 是否允许被关注 1/0
		 */
		allowasfollow?: number;

		/**
		 * 菜单数量
		 */
		menunum?: number;

		/**
		 * 空间主题
		 */
		theme?: string;

		/**
		 * 自定义CSS
		 */
		spacecss?: string;

		/**
		 * DIY模块位置（占位）
		 */
		blockposition?: string;

		/**
		 * 最近留言
		 */
		recentnote?: string;

		/**
		 * 空间公告
		 */
		spacenote?: string;

		/**
		 * 隐私设置JSON
		 */
		privacy?: string;

		/**
		 * 动态好友筛选（遗留）
		 */
		feedfriend?: mediumtext;

		/**
		 * 接受邮件设置
		 */
		acceptemail?: string;

		/**
		 * 上次订阅邮件发送时间戳(秒)，0=从未发（对齐 X5 member_status.lastsendmail）
		 */
		lastsendmail?: number;

		/**
		 * 魔法道具（占位）
		 */
		magicgift?: string;

		/**
		 * 置顶日志
		 */
		stickblogs?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CommonTaskEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 前置任务（X5 relatedtaskid，须先完成该任务才可申请）
		 */
		relatedTaskId?: number;

		/**
		 * 互斥任务（X5 exclusivetaskid，已领未放弃则不可申请/领奖）
		 */
		exclusiveTaskId?: number;

		/**
		 * 状态（X5 available 0=停用 1=未上线/已下线 2=在线）
		 */
		available?: number;

		/**
		 * 任务名称（X5 name）
		 */
		name?: string;

		/**
		 * 任务说明（X5 description，text）
		 */
		description?: string;

		/**
		 * 图标 URL（X5 icon，空=默认 task 图）
		 */
		icon?: string;

		/**
		 * 参与人数（X5 applicants，申请+1 放弃-1）
		 */
		applicants?: number;

		/**
		 * 完成人数（X5 achievers，领奖+1）
		 */
		achievers?: number;

		/**
		 * 领奖人数上限（X5 tasklimits，0=不限）
		 */
		taskLimits?: number;

		/**
		 * 可申请组（X5 applyperm：all/member/admin 或 \t 分隔组 id）
		 */
		applyPerm?: string;

		/**
		 * 检测器标识（X5 scriptname，对应 task.classes 注册表键；插件双通道落档）
		 */
		scriptName?: string;

		/**
		 * 上线时间戳（X5 starttime，秒）
		 */
		startTime?: BigInt;

		/**
		 * 下线时间戳（X5 endtime，0=不限）
		 */
		endTime?: BigInt;

		/**
		 * 周期长度（X5 period，配 periodType 四型）
		 */
		period?: number;

		/**
		 * 周期类型（X5 periodtype 0=每 period 小时 1=每 period 天 2=每周星期period 3=每月period日）
		 */
		periodType?: number;

		/**
		 * 奖励类型（X5 reward 五型：credit 积分/magic 道具/medal 勋章/invite 邀请码/group 扩展组）
		 */
		reward?: enum;

		/**
		 * 奖励标的（X5 prize：道具 id/勋章 id/邀请码个数/组 id；credit 多币种落档=本站单币忽略）
		 */
		prize?: string;

		/**
		 * 奖励量（X5 bonus：积分数/道具张数/勋章有效天 0=永久/邀请天数控 0=5 天/扩展组有效天 0=永久）
		 */
		bonus?: number;

		/**
		 * 列表排序（X5 displayorder，小者前）
		 */
		displayorder?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface HomeVisitorEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 空间主人用户ID
		 */
		userId?: number;

		/**
		 * 访客用户ID
		 */
		vuid?: number;

		/**
		 * 访客用户名（冗余）
		 */
		vusername?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface PortalArticleTitleEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 分类ID（对应 portal_category.catid）
		 */
		catid?: number;

		/**
		 * 区块ID（对应 common_block.bid）
		 */
		bid?: number;

		/**
		 * 作者用户ID（对应 ucenter_member.id）
		 */
		userId?: number;

		/**
		 * 作者用户名（冗余）
		 */
		username?: string;

		/**
		 * 文章标题
		 */
		title?: string;

		/**
		 * 标题高亮样式
		 */
		highlight?: string;

		/**
		 * 作者署名
		 */
		author?: string;

		/**
		 * 来源
		 */
		from?: string;

		/**
		 * 来源 URL
		 */
		fromurl?: string;

		/**
		 * 跳转 URL（外链文章）
		 */
		url?: string;

		/**
		 * 摘要
		 */
		summary?: string;

		/**
		 * 封面图
		 */
		pic?: string;

		/**
		 * 是否缩略图 1-是 0-否
		 */
		thumb?: number;

		/**
		 * 是否远程图片 1-是 0-否
		 */
		remote?: number;

		/**
		 * 文章来源ID（0=纯门户，指向 forum_thread.id/forum_post.id/blog.id）
		 */
		sourceId?: number;

		/**
		 * 文章来源类型（''/tid/pid/blogid）
		 */
		sourceType?: string;

		/**
		 * 内容分页数
		 */
		contents?: number;

		/**
		 * 允许评论 1-是 0-否
		 */
		allowcomment?: number;

		/**
		 * 仅自己评论 1-是 0-否
		 */
		owncomment?: number;

		/**
		 * 点击1 统计
		 */
		click1?: number;

		/**
		 * 点击2 统计
		 */
		click2?: number;

		/**
		 * 点击3 统计
		 */
		click3?: number;

		/**
		 * 点击4 统计
		 */
		click4?: number;

		/**
		 * 点击5 统计
		 */
		click5?: number;

		/**
		 * 点击6 统计
		 */
		click6?: number;

		/**
		 * 点击7 统计
		 */
		click7?: number;

		/**
		 * 点击8 统计
		 */
		click8?: number;

		/**
		 * 标签串（tagid,tagname\t 重复段）
		 */
		tags?: string;

		/**
		 * 状态 0-正常 1-待审核 2-忽略 -1-回收站
		 */
		status?: number;

		/**
		 * 显示内文导航 1-是 0-否
		 */
		showinnernav?: number;

		/**
		 * 上一篇 aid
		 */
		preaid?: number;

		/**
		 * 下一篇 aid
		 */
		nextaid?: number;

		/**
		 * 静态化 1-是 0-否
		 */
		htmlmade?: number;

		/**
		 * 静态文件名
		 */
		htmlname?: string;

		/**
		 * 静态目录
		 */
		htmldir?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface PortalCategoryEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 父分类ID（0=顶级）
		 */
		upid?: number;

		/**
		 * 分类名称
		 */
		catname?: string;

		/**
		 * 文章数（冗余）
		 */
		articles?: number;

		/**
		 * 允许评论 1-是 0-否
		 */
		allowcomment?: number;

		/**
		 * 排序
		 */
		displayorder?: number;

		/**
		 * 是否继承文章 0-继承 1-不继承
		 */
		notinheritedarticle?: number;

		/**
		 * 是否继承区块 0-继承 1-不继承
		 */
		notinheritedblock?: number;

		/**
		 * 绑定域名
		 */
		domain?: string;

		/**
		 * 分类 URL
		 */
		url?: string;

		/**
		 * 分类管理员 uid
		 */
		userId?: number;

		/**
		 * 分类管理员用户名（冗余）
		 */
		username?: string;

		/**
		 * 是否关闭 1-是 0-否
		 */
		closed?: number;

		/**
		 * 是否在导航显示 1-是 0-否
		 */
		shownav?: number;

		/**
		 * 分类描述
		 */
		description?: string;

		/**
		 * SEO 标题
		 */
		seotitle?: string;

		/**
		 * SEO 关键词
		 */
		keyword?: string;

		/**
		 * 禁止投稿 1-是 0-否
		 */
		disallowpublish?: number;

		/**
		 * 静态目录名
		 */
		foldername?: string;

		/**
		 * 每页文章数
		 */
		perpage?: number;

		/**
		 * 最大页数
		 */
		maxpages?: number;

		/**
		 * 列表模板名
		 */
		primaltplname?: string;

		/**
		 * 文章模板名
		 */
		articleprimaltplname?: string;

		/**
		 * 不显示文章摘要
		 */
		notshowarticlesummay?: string;

		/**
		 * 关闭防盗链 1-是 0-否
		 */
		noantitheft?: number;

		/**
		 * 最后发布时间
		 */
		lastPublishTime?: Date;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface PortalCommentEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 评论用户ID（对应 ucenter_member.id）
		 */
		userId?: number;

		/**
		 * 评论用户名（冗余）
		 */
		username?: string;

		/**
		 * 被评论对象ID（文章/专题）
		 */
		targetId?: number;

		/**
		 * 被评论对象类型（aid/topicid）
		 */
		targetType?: string;

		/**
		 * 发帖 IP
		 */
		postip?: string;

		/**
		 * 端口
		 */
		port?: number;

		/**
		 * 状态 0-正常 1-待审核 2-删除
		 */
		status?: number;

		/**
		 * 评论内容
		 */
		message?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface PortalTopicEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 专题标题
		 */
		title?: string;

		/**
		 * 专题标识名
		 */
		name?: string;

		/**
		 * 绑定域名
		 */
		domain?: string;

		/**
		 * 专题简介
		 */
		summary?: string;

		/**
		 * 关键词
		 */
		keyword?: string;

		/**
		 * 封面图
		 */
		cover?: string;

		/**
		 * 封面标记 1-是 0-否
		 */
		picflag?: number;

		/**
		 * 模板名
		 */
		primaltplname?: string;

		/**
		 * 使用页头 1-是 0-否
		 */
		useheader?: number;

		/**
		 * 使用页脚 1-是 0-否
		 */
		usefooter?: number;

		/**
		 * 作者用户ID
		 */
		userId?: number;

		/**
		 * 作者用户名（冗余）
		 */
		username?: string;

		/**
		 * 浏览数
		 */
		viewnum?: number;

		/**
		 * 是否关闭 1-是 0-否
		 */
		closed?: number;

		/**
		 * 允许评论 1-是 0-否
		 */
		allowcomment?: number;

		/**
		 * 评论数
		 */
		commentnum?: number;

		/**
		 * 静态化 1-是 0-否
		 */
		htmlmade?: number;

		/**
		 * 静态目录
		 */
		htmldir?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CommonSearchindexEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 搜索模块（见 SearchModuleEnum）
		 */
		srchmod?: number;

		/**
		 * 高亮关键词（+ 分隔）
		 */
		keywords?: string;

		/**
		 * 完整搜索参数串（| 分隔，洪水控制/缓存复用凭据）
		 */
		searchstring?: string;

		/**
		 * 搜索者 IP（游客洪水控制用，登录态冗余）
		 */
		useip?: string;

		/**
		 * 搜索者用户 ID
		 */
		userId?: number;

		/**
		 * 缓存过期时间
		 */
		expirationTime?: Date;

		/**
		 * 主题分类搜索遗留列（恒 0）
		 */
		threadsortid?: smallint;

		/**
		 * 匹配结果数
		 */
		num?: smallint;

		/**
		 * 匹配 id 集合（逗号连接；group 为 JSON 双集合）
		 */
		ids?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface AiosSupportTicketEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 来源模块
		 */
		module?: string;

		/**
		 * 工单编号
		 */
		ticketNo?: string;

		/**
		 * 工单类型 0=Bug反馈 1=功能建议 2=其他
		 */
		type?: number;

		/**
		 * 工单状态 0=待处理 1=处理中 2=已处理 3=已关闭
		 */
		status?: number;

		/**
		 * 优先级 0=低 1=中 2=高 3=紧急
		 */
		priority?: number;

		/**
		 * 标题
		 */
		title?: string;

		/**
		 * 描述
		 */
		description?: longtext;

		/**
		 * 标签
		 */
		tags?: any;

		/**
		 * 关闭原因
		 */
		closeReason?: number;

		/**
		 * 提交人 id（submitterType 决定来源：0=base_sys_user / 1=aios_ucenter_user）
		 */
		submitterId?: number;

		/**
		 * 提交人类型 0=后台管理员 1=前台用户（见 SubmitTypeEnum）
		 */
		submitterType?: number;

		/**
		 * 联系方式（邮箱或手机号，仅匿名提交时由用户填写）
		 */
		contact?: string;

		/**
		 * 指派处理人（后台用户 id）
		 */
		assigneeId?: number;

		/**
		 * 来源在线客服会话ID（客服代客下单时回填；空=不是从会话里开的）
		 */
		csSessionId?: BigInt;

		/**
		 * 首次响应时间（处理人第一次回复/认领时间），用于计算 FRT
		 */
		firstReplyTime?: Date;

		/**
		 * 解决时间（进入已处理时间点），用于计算解决时长
		 */
		resolvedTime?: Date;

		/**
		 * SLA 解决时限（按优先级算出的应解决时间），逾期未解决即违反 SLA
		 */
		dueTime?: Date;

		/**
		 * 是否已 SLA 升级（超时未解决已触发升级通知），0=未升级 1=已升级
		 */
		isEscalated?: boolean;

		/**
		 * SLA 升级层级（多级升级用，0=未升级 1=一级处理人 2=二级主管 3=三级管理员）
		 */
		escalationLevel?: number;

		/**
		 * 客户端环境信息 JSON（clientType/deviceName/osVersion/appName/appVersion/appId/scriptVersion/extra），详见 TicketClientMeta
		 */
		meta?: any;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TaokeBillEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 用户ID，关联 user_info.id
		 */
		userId?: number;

		/**
		 * 类型 income-收入 expense-支出
		 */
		type?: string;

		/**
		 * 金额
		 */
		amount?: number;

		/**
		 * 余额
		 */
		balance?: number;

		/**
		 * 描述
		 */
		desc?: string;

		/**
		 * 关联订单ID
		 */
		orderId?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TaokeCommentEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 用户ID，关联 user_info.id
		 */
		userId?: number;

		/**
		 * 线报ID，关联 aios_taoke_tipoff.id
		 */
		tipoffId?: number;

		/**
		 * 评论内容
		 */
		content?: string;

		/**
		 * 状态 0-待审核 1-通过 2-拒绝
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TaokeFavoriteEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 用户ID，关联 user_info.id
		 */
		userId?: number;

		/**
		 * 线报ID，关联 aios_taoke_tipoff.id
		 */
		tipoffId?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TaokeGoodsEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 平台商品ID
		 */
		goodsId?: string;

		/**
		 * 商品标题
		 */
		title?: string;

		/**
		 * 短标题
		 */
		dtitle?: string;

		/**
		 * 商品简介
		 */
		desc?: string;

		/**
		 * 商品主图
		 */
		mainPic?: string;

		/**
		 * 原价
		 */
		originalPrice?: number;

		/**
		 * 券后价
		 */
		actualPrice?: number;

		/**
		 * 佣金比例
		 */
		commissionRate?: number;

		/**
		 * 平台 tb/jd/pdd
		 */
		platform?: string;

		/**
		 * 日销量
		 */
		dailySales?: number;

		/**
		 * 来源线报ID
		 */
		tipoffId?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TaokeOrderEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 用户ID，关联 user_info.id
		 */
		userId?: number;

		/**
		 * 类型 vip-会员 point-积分
		 */
		type?: string;

		/**
		 * 金额
		 */
		amount?: number;

		/**
		 * 状态 0-待支付 1-已支付 2-已取消
		 */
		status?: number;

		/**
		 * 支付方式
		 */
		payMethod?: string;

		/**
		 * 交易号
		 */
		tradeNo?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TaokeTicketEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 用户ID，关联 user_info.id
		 */
		userId?: number;

		/**
		 * 标题
		 */
		title?: string;

		/**
		 * 内容
		 */
		content?: string;

		/**
		 * 状态 0-待处理 1-处理中 2-已解决
		 */
		status?: number;

		/**
		 * 回复列表
		 */
		replies?: any;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TaokeTipoffEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 内容中包含的链接地址解析出的商品、活动、优惠券ID
		 */
		itemIds?: string;

		/**
		 * 线报内容
		 */
		content?: string;

		/**
		 * 线报展示内容
		 */
		contentCopy?: string;

		/**
		 * 发布用户ID，默认1为管理员
		 */
		userId?: number;

		/**
		 * 线报图片
		 */
		picUrls?: string;

		/**
		 * 内容中包含的跳转链接地址
		 */
		urls?: string;

		/**
		 * 原文地址
		 */
		sourceUrl?: string;

		/**
		 * 是否推荐
		 */
		isRecommend?: boolean;

		/**
		 * 推广数
		 */
		tgNum?: number;

		/**
		 * 是否首页推荐
		 */
		isHomeRecommend?: boolean;

		/**
		 * 首页推荐文案
		 */
		recommendDesc?: string;

		/**
		 * 点赞数
		 */
		likeCount?: number;

		/**
		 * 评论数
		 */
		commentCount?: number;

		/**
		 * 收藏数
		 */
		favoriteCount?: number;

		/**
		 * 分享数
		 */
		shareCount?: number;

		/**
		 * 分类ID
		 */
		categoryId?: number;

		/**
		 * 是否置顶
		 */
		isTop?: boolean;

		/**
		 * 内容指纹（去空白+前250字符MD5，跨源去重）
		 */
		contentHash?: string;

		/**
		 * 转链失败数
		 */
		convertFailCount?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UcenterUserAddressEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 用户ID，关联 aios_ucenter_user.id
		 */
		userId?: number;

		/**
		 * 联系人
		 */
		contact?: string;

		/**
		 * 手机号
		 */
		phone?: string;

		/**
		 * 省
		 */
		province?: string;

		/**
		 * 市
		 */
		city?: string;

		/**
		 * 区
		 */
		district?: string;

		/**
		 * 详细地址
		 */
		address?: string;

		/**
		 * 邮编
		 */
		zipCode?: string;

		/**
		 * 是否默认地址
		 */
		isDefault?: boolean;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UcenterFeedEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 应用ID
		 */
		appId?: smallint;

		/**
		 * 图标标识
		 */
		icon?: string;

		/**
		 * 发布用户ID
		 */
		userId?: mediumint;

		/**
		 * 模板哈希
		 */
		hashTemplate?: string;

		/**
		 * 数据哈希
		 */
		hashData?: string;

		/**
		 * 标题模板
		 */
		titleTemplate?: string;

		/**
		 * 标题数据
		 */
		titleData?: any;

		/**
		 * 正文模板
		 */
		bodyTemplate?: string;

		/**
		 * 正文数据
		 */
		bodyData?: any;

		/**
		 * 通用正文
		 */
		bodyGeneral?: string;

		/**
		 * 图片列表
		 */
		images?: any;

		/**
		 * 目标用户ID列表
		 */
		targetUids?: any;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 昵称
		 */
		nickName?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UcenterNotificationEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 接收用户ID
		 */
		userId?: BigInt;

		/**
		 * 接收人类型（NotificationReceiverType）user-前端用户 admin-后台管理员
		 */
		receiverType?: string;

		/**
		 * 标题
		 */
		title?: string;

		/**
		 * 内容
		 */
		content?: string;

		/**
		 * 分类（NotificationType）system-系统 activation-激活 revoke-撤销 expire_warning-到期提醒
		 */
		type?: string;

		/**
		 * 是否已读 0-未读 1-已读
		 */
		isRead?: number;

		/**
		 * 关联业务模块（如 licensing/taoke）
		 */
		module?: string;

		/**
		 * 关联业务ID
		 */
		refId?: string;

		/**
		 * 动作专属详情
		 */
		detail?: any;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UcenterTagEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 标签名
		 */
		tagName?: string;

		/**
		 * 应用ID
		 */
		appId?: smallint;

		/**
		 * 标签数据
		 */
		data?: any;

		/**
		 * 过期时间(空=永不过期)
		 */
		expireTime?: Date;

		/**
		 * 上次上报时间（催更判定依据，与 expireTime 的"作废"两义分开）
		 */
		lastReportTime?: Date;

		/**
		 * 是否已被中心标记为待刷新（上报成功后自动清）
		 */
		isNeedsRefresh?: boolean;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UcenterUserLogEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 当事人用户ID，关联 aios_ucenter_user.id
		 */
		userId?: number;

		/**
		 * 动作类型
		 */
		action?: string;

		/**
		 * 操作结果 success/fail
		 */
		result?: string;

		/**
		 * 失败原因（登录失败那类动作才有）
		 */
		failReason?: string;

		/**
		 * IP地址
		 */
		ip?: string;

		/**
		 * 设备指纹
		 */
		deviceFingerprint?: string;

		/**
		 * User-Agent
		 */
		ua?: string;

		/**
		 * 风险等级 low/medium/high
		 */
		riskLevel?: string;

		/**
		 * 动作专属详情
		 */
		detail?: any;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserAddressEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 用户ID
		 */
		userId?: number;

		/**
		 * 联系人
		 */
		contact?: string;

		/**
		 * 手机号
		 */
		phone?: string;

		/**
		 * 省
		 */
		province?: string;

		/**
		 * 市
		 */
		city?: string;

		/**
		 * 区
		 */
		district?: string;

		/**
		 * 地址
		 */
		address?: string;

		/**
		 * 是否默认
		 */
		isDefault?: boolean;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserInfoEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 登录唯一ID
		 */
		unionid?: string;

		/**
		 * 头像
		 */
		avatarUrl?: string;

		/**
		 * 昵称
		 */
		nickName?: string;

		/**
		 * 手机号
		 */
		phone?: string;

		/**
		 * 性别
		 */
		gender?: number;

		/**
		 * 状态
		 */
		status?: number;

		/**
		 * 登录方式
		 */
		loginType?: number;

		/**
		 * 密码
		 */
		password?: string;

		/**
		 * 介绍
		 */
		description?: string;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	type json = any;

	type DictKey = "brand" | "occupation";

	interface PagePagination {
		size: number;
		page: number;
		total: number;
		[key: string]: any;
	}

	interface PageResponse<T> {
		pagination: PagePagination;
		list: T[];
		[key: string]: any;
	}

	interface PintuanExchangePageResponse {
		pagination: PagePagination;
		list: PintuanExchangeEntity[];
	}

	interface PintuanInvitePageResponse {
		pagination: PagePagination;
		list: PintuanInviteEntity[];
	}

	interface PintuanLotteryPageResponse {
		pagination: PagePagination;
		list: PintuanLotteryRecordEntity[];
	}

	interface PintuanReviewPageResponse {
		pagination: PagePagination;
		list: PintuanReviewEntity[];
	}

	interface PintuanTeamPageResponse {
		pagination: PagePagination;
		list: PintuanTeamEntity[];
	}

	interface SiteBlogArticlePageResponse {
		pagination: PagePagination;
		list: BlogArticleEntity[];
	}

	interface SiteForumCollectionPageResponse {
		pagination: PagePagination;
		list: ForumCollectionEntity[];
	}

	interface SitePortalArticlePageResponse {
		pagination: PagePagination;
		list: PortalArticleTitleEntity[];
	}

	interface SitePortalCategoryPageResponse {
		pagination: PagePagination;
		list: PortalCategoryEntity[];
	}

	interface SitePortalCommentPageResponse {
		pagination: PagePagination;
		list: PortalCommentEntity[];
	}

	interface SitePortalTopicPageResponse {
		pagination: PagePagination;
		list: PortalTopicEntity[];
	}

	interface SupportTicketTicketPageResponse {
		pagination: PagePagination;
		list: AiosSupportTicketEntity[];
	}

	interface TaokeBillPageResponse {
		pagination: PagePagination;
		list: TaokeBillEntity[];
	}

	interface TaokeFavoritePageResponse {
		pagination: PagePagination;
		list: TaokeFavoriteEntity[];
	}

	interface TaokeGoodsPageResponse {
		pagination: PagePagination;
		list: TaokeGoodsEntity[];
	}

	interface TaokeOrderPageResponse {
		pagination: PagePagination;
		list: TaokeOrderEntity[];
	}

	interface TaokeTicketPageResponse {
		pagination: PagePagination;
		list: TaokeTicketEntity[];
	}

	interface TaokeTipoffPageResponse {
		pagination: PagePagination;
		list: TaokeTipoffEntity[];
	}

	interface UcenterAddressPageResponse {
		pagination: PagePagination;
		list: UcenterUserAddressEntity[];
	}

	interface UcenterFeedPageResponse {
		pagination: PagePagination;
		list: UcenterFeedEntity[];
	}

	interface UcenterNotificationPageResponse {
		pagination: PagePagination;
		list: UcenterNotificationEntity[];
	}

	interface UcenterTagPageResponse {
		pagination: PagePagination;
		list: UcenterTagEntity[];
	}

	interface UcenterUserLogPageResponse {
		pagination: PagePagination;
		list: UcenterUserLogEntity[];
	}

	interface UserAddressPageResponse {
		pagination: PagePagination;
		list: UserAddressEntity[];
	}

	interface LicensingApp {
		/**
		 * 自动发布更新版本号
		 */
		updateVersion(data?: any): Promise<any>;

		/**
		 * 客户端激活卡密（通用，不依赖具体产品）
		 */
		activate(data?: any): Promise<any>;

		/**
		 * 客户端校验设备授权（通用）
		 */
		verify(data?: any): Promise<any>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<LicensingAppEntity[]>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<LicensingAppEntity>;

		/**
		 * 权限标识
		 */
		permission: {
			updateVersion: string;
			activate: string;
			verify: string;
			list: string;
			info: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			updateVersion: boolean;
			activate: boolean;
			verify: boolean;
			list: boolean;
			info: boolean;
		};

		request: Request;
	}

	interface LicensingLicense {
		/**
		 * 开关自动续费
		 */
		toggle(data?: any): Promise<any>;

		/**
		 * 支付回调(已废弃,请走 open 端点)
		 */
		callback(data?: any): Promise<any>;

		/**
		 * 我的订阅列表
		 */
		my(data?: any): Promise<any>;

		/**
		 * 激活试用期
		 */
		activate(data?: any): Promise<any>;

		/**
		 * 检查设备试用资格
		 */
		check(data?: any): Promise<any>;

		/**
		 * 离线激活
		 */
		activateoffline(data?: any): Promise<any>;

		/**
		 * 解绑设备
		 */
		unbinddevice(data?: any): Promise<any>;

		/**
		 * 获取支付参数(按渠道)
		 */
		payprepare(data?: any): Promise<any>;

		/**
		 * 订单支付状态
		 */
		paystatus(data?: any): Promise<any>;

		/**
		 * 查看卡密明文
		 */
		revealkey(data?: any): Promise<any>;

		/**
		 * 我的已激活设备
		 */
		mydevices(data?: any): Promise<any>;

		/**
		 * 授权套餐列表
		 */
		templates(data?: any): Promise<any>;

		/**
		 * 心跳验证
		 */
		heartbeat(data?: any): Promise<any>;

		/**
		 * 下单购买
		 */
		purchase(data?: any): Promise<any>;

		/**
		 * 激活卡密
		 */
		activate(data?: any): Promise<any>;

		/**
		 * 我的卡密列表
		 */
		mykeys(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			toggle: string;
			callback: string;
			my: string;
			activate: string;
			check: string;
			activateoffline: string;
			unbinddevice: string;
			payprepare: string;
			paystatus: string;
			revealkey: string;
			mydevices: string;
			templates: string;
			heartbeat: string;
			purchase: string;
			mykeys: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			toggle: boolean;
			callback: boolean;
			my: boolean;
			activate: boolean;
			check: boolean;
			activateoffline: boolean;
			unbinddevice: boolean;
			payprepare: boolean;
			paystatus: boolean;
			revealkey: boolean;
			mydevices: boolean;
			templates: boolean;
			heartbeat: boolean;
			purchase: boolean;
			mykeys: boolean;
		};

		request: Request;
	}

	interface PintuanAuth {
		/**
		 * 微信小程序登录
		 */
		login(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { login: string };

		/**
		 * 权限状态
		 */
		_permission: { login: boolean };

		request: Request;
	}

	interface PintuanBenefit {
		/**
		 * 今日签到状态
		 */
		status(data?: any): Promise<any>;

		/**
		 * 观看视频奖励积分
		 */
		watch(data?: any): Promise<any>;

		/**
		 * 每日签到
		 */
		sign(data?: any): Promise<any>;

		/**
		 * 积分排行榜
		 */
		rank(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { status: string; watch: string; sign: string; rank: string };

		/**
		 * 权限状态
		 */
		_permission: { status: boolean; watch: boolean; sign: boolean; rank: boolean };

		request: Request;
	}

	interface PintuanCommission {
		/**
		 * 参团导流归因
		 */
		attribution(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { attribution: string };

		/**
		 * 权限状态
		 */
		_permission: { attribution: boolean };

		request: Request;
	}

	interface PintuanExchange {
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<PintuanExchangePageResponse>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<PintuanExchangeEntity>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { page: string; info: string; add: string };

		/**
		 * 权限状态
		 */
		_permission: { page: boolean; info: boolean; add: boolean };

		request: Request;
	}

	interface PintuanFollow {
		/**
		 * 关注/取关拼团降价
		 */
		toggle(data?: any): Promise<any>;

		/**
		 * 是否已关注
		 */
		status(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { toggle: string; status: string };

		/**
		 * 权限状态
		 */
		_permission: { toggle: boolean; status: boolean };

		request: Request;
	}

	interface PintuanInvite {
		/**
		 * 接受邀请
		 */
		bind(data?: any): Promise<any>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<PintuanInvitePageResponse>;

		/**
		 * 权限标识
		 */
		permission: { bind: string; page: string };

		/**
		 * 权限状态
		 */
		_permission: { bind: boolean; page: boolean };

		request: Request;
	}

	interface PintuanLottery {
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<PintuanLotteryPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { page: string; add: string };

		/**
		 * 权限状态
		 */
		_permission: { page: boolean; add: boolean };

		request: Request;
	}

	interface PintuanPoster {
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<PintuanTeamEntity>;

		/**
		 * 权限标识
		 */
		permission: { info: string };

		/**
		 * 权限状态
		 */
		_permission: { info: boolean };

		request: Request;
	}

	interface PintuanReview {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<PintuanReviewPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { delete: string; page: string; add: string };

		/**
		 * 权限状态
		 */
		_permission: { delete: boolean; page: boolean; add: boolean };

		request: Request;
	}

	interface PintuanTask {
		/**
		 * 完成任务领奖
		 */
		complete(data?: any): Promise<any>;

		/**
		 * 今日任务
		 */
		list(data?: any): Promise<any[]>;

		/**
		 * 权限标识
		 */
		permission: { complete: string; list: string };

		/**
		 * 权限状态
		 */
		_permission: { complete: boolean; list: boolean };

		request: Request;
	}

	interface PintuanTeam {
		/**
		 * 海报OCR预填
		 */
		ocrprefill(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<PintuanTeamEntity>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<PintuanTeamPageResponse>;

		/**
		 * 建团（分享链接 / 拼单号 / 海报OCR）
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { ocrprefill: string; info: string; page: string; add: string };

		/**
		 * 权限状态
		 */
		_permission: { ocrprefill: boolean; info: boolean; page: boolean; add: boolean };

		request: Request;
	}

	interface PromoteComm {
		/**
		 * 获取通用好评
		 */
		getCommonComment(data?: any): Promise<any>;

		/**
		 * 获取纸巾好评
		 */
		getTissueComment(data?: any): Promise<any>;

		/**
		 * 获取文案html格式
		 */
		html(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { getCommonComment: string; getTissueComment: string; html: string };

		/**
		 * 权限状态
		 */
		_permission: { getCommonComment: boolean; getTissueComment: boolean; html: boolean };

		request: Request;
	}

	interface PromoteCopywriting {
		/**
		 * 权限标识
		 */
		permission: {};

		/**
		 * 权限状态
		 */
		_permission: {};

		request: Request;
	}

	interface SaltfishComm {
		/**
		 * 获取自动采购参数
		 */
		getPurchaseConfig(data?: any): Promise<any>;

		/**
		 * 系统更新Api接口
		 */
		updateSysparam(data?: any): Promise<any>;

		/**
		 * 执行采购
		 */
		autoPurchase(data?: any): Promise<any>;

		/**
		 * 获取最新版本的app信息
		 */
		applatest(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			getPurchaseConfig: string;
			updateSysparam: string;
			autoPurchase: string;
			applatest: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			getPurchaseConfig: boolean;
			updateSysparam: boolean;
			autoPurchase: boolean;
			applatest: boolean;
		};

		request: Request;
	}

	interface SaltfishProduct {
		/**
		 * 采集入库
		 */
		warehousing(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { warehousing: string };

		/**
		 * 权限状态
		 */
		_permission: { warehousing: boolean };

		request: Request;
	}

	interface SaltfishScriptBug {
		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { add: string };

		/**
		 * 权限状态
		 */
		_permission: { add: boolean };

		request: Request;
	}

	interface SaltfishSpiderCommon {
		/**
		 * 删除商品爬虫
		 */
		deleteGoods(data?: any): Promise<any>;

		/**
		 * 添加商品爬虫
		 */
		addGoods(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { deleteGoods: string; addGoods: string };

		/**
		 * 权限状态
		 */
		_permission: { deleteGoods: boolean; addGoods: boolean };

		request: Request;
	}

	interface SaltfishSpiderIdlefish {
		/**
		 * 添加搜索数据
		 */
		addSearchRecommend(data?: any): Promise<any>;

		/**
		 * 添加首页推荐数据2
		 */
		addHomeRecommend2(data?: any): Promise<any>;

		/**
		 * 添加商品页推荐数据
		 */
		addGoodsRecommend(data?: any): Promise<any>;

		/**
		 * 添加首页推荐数据
		 */
		addHomeRecommend(data?: any): Promise<any>;

		/**
		 * 添加产品库
		 */
		addProduct(data?: any): Promise<any>;

		/**
		 * 添加首页Tab
		 */
		addHomeTab(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			addSearchRecommend: string;
			addHomeRecommend2: string;
			addGoodsRecommend: string;
			addHomeRecommend: string;
			addProduct: string;
			addHomeTab: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			addSearchRecommend: boolean;
			addHomeRecommend2: boolean;
			addGoodsRecommend: boolean;
			addHomeRecommend: boolean;
			addProduct: boolean;
			addHomeTab: boolean;
		};

		request: Request;
	}

	interface SaltfishSpiderPinduoduo {
		/**
		 * 添加产品库
		 */
		addProduct(data?: any): Promise<any>;

		/**
		 * 添加评论
		 */
		addComment(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { addProduct: string; addComment: string };

		/**
		 * 权限状态
		 */
		_permission: { addProduct: boolean; addComment: boolean };

		request: Request;
	}

	interface SiteBlogArticle {
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<BlogArticleEntity>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<SiteBlogArticlePageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { info: string; page: string; add: string };

		/**
		 * 权限状态
		 */
		_permission: { info: boolean; page: boolean; add: boolean };

		request: Request;
	}

	interface SiteBlogComment {
		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { add: string };

		/**
		 * 权限状态
		 */
		_permission: { add: boolean };

		request: Request;
	}

	interface SiteForumActivity {
		/**
		 * 活动报名批量管理（X5 activityapplylist operation 四支）
		 */
		masterOp(data?: any): Promise<any>;

		/**
		 * 取消报名（X5 activityapplies activitycancel）
		 */
		cancel(data?: any): Promise<any>;

		/**
		 * 报名活动（X5 activityapplies activitysubmit）
		 */
		apply(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { masterOp: string; cancel: string; apply: string };

		/**
		 * 权限状态
		 */
		_permission: { masterOp: boolean; cancel: boolean; apply: boolean };

		request: Request;
	}

	interface SiteForumAnnouncement {
		/**
		 * fetchDetail
		 */
		fetchDetail(data?: any): Promise<any>;

		/**
		 * fetchList
		 */
		fetchList(data?: any): Promise<any>;

		/**
		 * headline
		 */
		headline(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { fetchDetail: string; fetchList: string; headline: string };

		/**
		 * 权限状态
		 */
		_permission: { fetchDetail: boolean; fetchList: boolean; headline: boolean };

		request: Request;
	}

	interface SiteForumAttachment {
		/**
		 * 抓取远程图片（X5 ajax downremoteimg：正文 [img]/<img> 外链落地为暂存附件并改写 [attachimg]）
		 */
		downremoteimg(data?: any): Promise<any>;

		/**
		 * 附件买家名单（X5 viewattachpayments，上传者∪版主）
		 */
		payLogs(data?: any): Promise<any>;

		/**
		 * 上传附件（暂存，发帖/回复时以 attachIds 绑定）
		 */
		upload(data?: any): Promise<any>;

		/**
		 * 删除附件（X5 ajax deleteattach：本人已绑定同楼 ∨ 版主 ∨ 本人暂存 三闸）
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<ForumAttachmentEntity[]>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<ForumAttachmentEntity>;

		/**
		 * 购买积分附件（X5 attachpay，buyall=同帖全部）
		 */
		pay(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			downremoteimg: string;
			payLogs: string;
			upload: string;
			delete: string;
			list: string;
			info: string;
			pay: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			downremoteimg: boolean;
			payLogs: boolean;
			upload: boolean;
			delete: boolean;
			list: boolean;
			info: boolean;
			pay: boolean;
		};

		request: Request;
	}

	interface SiteForumBbcode {
		/**
		 * renderRules
		 */
		renderRules(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { renderRules: string };

		/**
		 * 权限状态
		 */
		_permission: { renderRules: boolean };

		request: Request;
	}

	interface SiteForumCollectionComment {
		/**
		 * 删除评论
		 */
		removeComment(data?: any): Promise<any>;

		/**
		 * 评论淘帖
		 */
		addComment(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { removeComment: string; addComment: string };

		/**
		 * 权限状态
		 */
		_permission: { removeComment: boolean; addComment: boolean };

		request: Request;
	}

	interface SiteForumCollectionFollow {
		/**
		 * 取消关注
		 */
		unfollow(data?: any): Promise<any>;

		/**
		 * 关注淘帖
		 */
		follow(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { unfollow: string; follow: string };

		/**
		 * 权限状态
		 */
		_permission: { unfollow: boolean; follow: boolean };

		request: Request;
	}

	interface SiteForumCollectionInvite {
		/**
		 * 我的待接受邀请
		 */
		pendingInvite(data?: any): Promise<any>;

		/**
		 * 接受邀请
		 */
		acceptInvite(data?: any): Promise<any>;

		/**
		 * 移除协作成员
		 */
		removeWorker(data?: any): Promise<any>;

		/**
		 * 邀请协作
		 */
		invite(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			pendingInvite: string;
			acceptInvite: string;
			removeWorker: string;
			invite: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			pendingInvite: boolean;
			acceptInvite: boolean;
			removeWorker: boolean;
			invite: boolean;
		};

		request: Request;
	}

	interface SiteForumCollection {
		/**
		 * 移除主题
		 */
		removeThread(data?: any): Promise<any>;

		/**
		 * 上传封面/图标
		 */
		uploadImg(data?: any): Promise<any>;

		/**
		 * 收录主题
		 */
		addThread(data?: any): Promise<any>;

		/**
		 * 删除封面/图标
		 */
		deleteImg(data?: any): Promise<any>;

		/**
		 * 封面/图标 URL 派生
		 */
		getImgUrl(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<SiteForumCollectionPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			removeThread: string;
			uploadImg: string;
			addThread: string;
			deleteImg: string;
			getImgUrl: string;
			update: string;
			delete: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			removeThread: boolean;
			uploadImg: boolean;
			addThread: boolean;
			deleteImg: boolean;
			getImgUrl: boolean;
			update: boolean;
			delete: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface SiteForumDebate {
		/**
		 * 辩论立场投票
		 */
		voteStand(data?: any): Promise<any>;

		/**
		 * 辩论结案
		 */
		umpire(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { voteStand: string; umpire: string };

		/**
		 * 权限状态
		 */
		_permission: { voteStand: boolean; umpire: boolean };

		request: Request;
	}

	interface SiteForumFavorite {
		/**
		 * 收藏 / 取消收藏
		 */
		toggle(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<ForumFavoriteEntity[]>;

		/**
		 * 我的收藏
		 */
		my(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { toggle: string; delete: string; list: string; my: string };

		/**
		 * 权限状态
		 */
		_permission: { toggle: boolean; delete: boolean; list: boolean; my: boolean };

		request: Request;
	}

	interface SiteForumGroup {
		/**
		 * 批量邀请好友（面板）
		 */
		inviteBatch(data?: any): Promise<any>;

		/**
		 * 编辑群组
		 */
		manageGroup(data?: any): Promise<any>;

		/**
		 * 成员管理
		 */
		manageUser(data?: any): Promise<any>;

		/**
		 * 审核成员
		 */
		checkUser(data?: any): Promise<any>;

		/**
		 * 创建群组
		 */
		create(data?: any): Promise<any>;

		/**
		 * 邀请加入
		 */
		invite(data?: any): Promise<any>;

		/**
		 * 转让群组
		 */
		demise(data?: any): Promise<any>;

		/**
		 * 加入群组
		 */
		join(data?: any): Promise<any>;

		/**
		 * 退出群组
		 */
		quit(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			inviteBatch: string;
			manageGroup: string;
			manageUser: string;
			checkUser: string;
			create: string;
			invite: string;
			demise: string;
			join: string;
			quit: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			inviteBatch: boolean;
			manageGroup: boolean;
			manageUser: boolean;
			checkUser: boolean;
			create: boolean;
			invite: boolean;
			demise: boolean;
			join: boolean;
			quit: boolean;
		};

		request: Request;
	}

	interface SiteForumHotreply {
		/**
		 * 热评榜
		 */
		hotList(data?: any): Promise<any>;

		/**
		 * 投支持/反对
		 */
		vote(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { hotList: string; vote: string };

		/**
		 * 权限状态
		 */
		_permission: { hotList: boolean; vote: boolean };

		request: Request;
	}

	interface SiteForumLike {
		/**
		 * 是否已点赞
		 */
		hasLiked(data?: any): Promise<any>;

		/**
		 * 点赞 / 取消点赞
		 */
		toggle(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<ForumLikeEntity[]>;

		/**
		 * 权限标识
		 */
		permission: { hasLiked: string; toggle: string; delete: string; list: string };

		/**
		 * 权限状态
		 */
		_permission: { hasLiked: boolean; toggle: boolean; delete: boolean; list: boolean };

		request: Request;
	}

	interface SiteForumMagic {
		/**
		 * 道具商店货架（hot=销量榜）
		 */
		shopList(data?: any): Promise<any>;

		/**
		 * 我的背包（含重量占用/上限）
		 */
		mybox(data?: any): Promise<any>;

		/**
		 * 卖回道具（X5 mybox sell，回价=折扣价×magicDiscount%）
		 */
		sell(data?: any): Promise<any>;

		/**
		 * 丢弃道具（X5 mybox drop）
		 */
		drop(data?: any): Promise<any>;

		/**
		 * 赠送道具（X5 shop give，allowmagics>=2 特权）
		 */
		give(data?: any): Promise<any>;

		/**
		 * 道具购买/使用/赠送记录
		 */
		logs(data?: any): Promise<any>;

		/**
		 * 购买道具（X5 shop buy，积分 BMC 流水）
		 */
		buy(data?: any): Promise<any>;

		/**
		 * 使用道具（X5 usesubmit：stick/close/open/highlight/bump/thunder/visit）
		 */
		use(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			shopList: string;
			mybox: string;
			sell: string;
			drop: string;
			give: string;
			logs: string;
			buy: string;
			use: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			shopList: boolean;
			mybox: boolean;
			sell: boolean;
			drop: boolean;
			give: boolean;
			logs: boolean;
			buy: boolean;
			use: boolean;
		};

		request: Request;
	}

	interface SiteForumMedal {
		/**
		 * 我的勋章日志
		 */
		myLogs(data?: any): Promise<any>;

		/**
		 * 领取/购买/申请
		 */
		apply(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { myLogs: string; apply: string };

		/**
		 * 权限状态
		 */
		_permission: { myLogs: boolean; apply: boolean };

		request: Request;
	}

	interface SiteForumModcp {
		/**
		 * 主题回收站
		 */
		recycleThreadPage(data?: any): Promise<any>;

		/**
		 * 回复回收站
		 */
		recycleReplyPage(data?: any): Promise<any>;

		/**
		 * 版块主题管理列表
		 */
		threadBoardPage(data?: any): Promise<any>;

		/**
		 * 批量处理举报（X5 reportsubmit：report_reward 钳制+RPC 积分奖励+回执通知）
		 */
		reportHandle(data?: any): Promise<any>;

		/**
		 * 待审主题队列
		 */
		threadQueue(data?: any): Promise<any>;

		/**
		 * 待审回复队列
		 */
		replyQueue(data?: any): Promise<any>;

		/**
		 * 举报处理台（X5 modcp action=report：待处理按 num 倒序+版块/lpp 操作条+奖励区间）
		 */
		reportPage(data?: any): Promise<any>;

		/**
		 * 我可管理的版块与队列计数
		 */
		myForums(data?: any): Promise<any>;

		/**
		 * 主题批量动作（通过/忽略/删除/恢复/彻底删除/移动/合并）
		 */
		threadOp(data?: any): Promise<any>;

		/**
		 * 回复批量动作（通过/忽略/删除/恢复/彻底删除）
		 */
		replyOp(data?: any): Promise<any>;

		/**
		 * 版务日志（X5 modcp action=log 跨版块合表倒序+关键字+lpp）
		 */
		logPage(data?: any): Promise<any>;

		/**
		 * 楼层版务操作（置顶/解除置顶/屏蔽/取消屏蔽/警告/取消警告，X5 topicadmin stickreply/banpost/warn）
		 */
		postOp(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			recycleThreadPage: string;
			recycleReplyPage: string;
			threadBoardPage: string;
			reportHandle: string;
			threadQueue: string;
			replyQueue: string;
			reportPage: string;
			myForums: string;
			threadOp: string;
			replyOp: string;
			logPage: string;
			postOp: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			recycleThreadPage: boolean;
			recycleReplyPage: boolean;
			threadBoardPage: boolean;
			reportHandle: boolean;
			threadQueue: boolean;
			replyQueue: boolean;
			reportPage: boolean;
			myForums: boolean;
			threadOp: boolean;
			replyOp: boolean;
			logPage: boolean;
			postOp: boolean;
		};

		request: Request;
	}

	interface SiteForumPoll {
		/**
		 * 提交投票
		 */
		vote(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { vote: string };

		/**
		 * 权限状态
		 */
		_permission: { vote: boolean };

		request: Request;
	}

	interface SiteForumPostComment {
		/**
		 * 楼层点评列表
		 */
		list(data?: any): Promise<ForumPostcommentEntity[]>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { list: string; add: string };

		/**
		 * 权限状态
		 */
		_permission: { list: boolean; add: boolean };

		request: Request;
	}

	interface SiteForumPost {
		/**
		 * 补充内容（仅作者本人）
		 */
		append(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 回帖
		 */
		reply(data?: any): Promise<any>;

		/**
		 * 我的回复列表
		 */
		my(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { append: string; delete: string; update: string; reply: string; my: string };

		/**
		 * 权限状态
		 */
		_permission: {
			append: boolean;
			delete: boolean;
			update: boolean;
			reply: boolean;
			my: boolean;
		};

		request: Request;
	}

	interface SiteForumRate {
		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { add: string };

		/**
		 * 权限状态
		 */
		_permission: { add: boolean };

		request: Request;
	}

	interface SiteForumRecommend {
		/**
		 * recommend
		 */
		recommend(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { recommend: string };

		/**
		 * 权限状态
		 */
		_permission: { recommend: boolean };

		request: Request;
	}

	interface SiteForumReport {
		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { add: string };

		/**
		 * 权限状态
		 */
		_permission: { add: boolean };

		request: Request;
	}

	interface SiteForumReward {
		/**
		 * 悬赏结案
		 */
		bestAnswer(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { bestAnswer: string };

		/**
		 * 权限状态
		 */
		_permission: { bestAnswer: boolean };

		request: Request;
	}

	interface SiteForumRushreply {
		/**
		 * 抢楼规则详情
		 */
		getRule(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { getRule: string };

		/**
		 * 权限状态
		 */
		_permission: { getRule: boolean };

		request: Request;
	}

	interface SiteForumStats {
		/**
		 * 我的论坛统计
		 */
		my(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { my: string };

		/**
		 * 权限状态
		 */
		_permission: { my: boolean };

		request: Request;
	}

	interface SiteForumTag {
		/**
		 * addUserTags
		 */
		addUserTags(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { addUserTags: string };

		/**
		 * 权限状态
		 */
		_permission: { addUserTags: boolean };

		request: Request;
	}

	interface SiteForumThread {
		/**
		 * 恢复隐藏主题（X5 hiderecover，作者/版主闸）
		 */
		recover(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 隐藏主题（X5 misc action=hidden，群防一点即藏）
		 */
		hide(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 我的主题列表
		 */
		my(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			recover: string;
			delete: string;
			update: string;
			hide: string;
			add: string;
			my: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			recover: boolean;
			delete: boolean;
			update: boolean;
			hide: boolean;
			add: boolean;
			my: boolean;
		};

		request: Request;
	}

	interface SiteForumThreadcover {
		/**
		 * setCover
		 */
		setCover(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { setCover: string };

		/**
		 * 权限状态
		 */
		_permission: { setCover: boolean };

		request: Request;
	}

	interface SiteForumTrade {
		/**
		 * 交易状态流转
		 */
		updateStatus(data?: any): Promise<any>;

		/**
		 * 买家下单
		 */
		createOrder(data?: any): Promise<any>;

		/**
		 * 交易评价
		 */
		comment(data?: any): Promise<any>;

		/**
		 * 生成支付链接（占位）
		 */
		orderid(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { updateStatus: string; createOrder: string; comment: string; orderid: string };

		/**
		 * 权限状态
		 */
		_permission: {
			updateStatus: boolean;
			createOrder: boolean;
			comment: boolean;
			orderid: boolean;
		};

		request: Request;
	}

	interface SiteGroupUser {
		/**
		 * 关注群组列表
		 */
		attentionList(data?: any): Promise<any>;

		/**
		 * 设置关注群组（≤5，空即清空）
		 */
		attentionSet(data?: any): Promise<any>;

		/**
		 * 是否群成员
		 */
		isMember(data?: any): Promise<any>;

		/**
		 * 加入群组
		 */
		join(data?: any): Promise<any>;

		/**
		 * 退出群组
		 */
		quit(data?: any): Promise<any>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<ForumGroupuserEntity[]>;

		/**
		 * 权限标识
		 */
		permission: {
			attentionList: string;
			attentionSet: string;
			isMember: string;
			join: string;
			quit: string;
			list: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			attentionList: boolean;
			attentionSet: boolean;
			isMember: boolean;
			join: boolean;
			quit: boolean;
			list: boolean;
		};

		request: Request;
	}

	interface SiteHomeAlbum {
		/**
		 * 好友相册（按好友 userId 集合 + 公开 friend=0 过滤）
		 */
		listByFriends(data?: any): Promise<any>;

		/**
		 * 我的相册（按 userId 过滤）
		 */
		listByUid(data?: any): Promise<any>;

		/**
		 * 设为封面
		 */
		setCover(data?: any): Promise<any>;

		/**
		 * 删除相册（moveto 图片去向三态）
		 */
		remove(data?: any): Promise<any>;

		/**
		 * 编辑相册（名称/简介/可见性）
		 */
		edit(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			listByFriends: string;
			listByUid: string;
			setCover: string;
			remove: string;
			edit: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			listByFriends: boolean;
			listByUid: boolean;
			setCover: boolean;
			remove: boolean;
			edit: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface SiteHomeBlog {
		/**
		 * 好友日志（按好友 userId 集合 + 公开 friend=0 过滤）
		 */
		listByFriends(data?: any): Promise<any>;

		/**
		 * 我的日志（按 userId 过滤；缺省 ctx 登录用户）
		 */
		listByUid(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<HomeBlogEntity>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			listByFriends: string;
			listByUid: string;
			delete: string;
			info: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			listByFriends: boolean;
			listByUid: boolean;
			delete: boolean;
			info: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface SiteHomeClick {
		/**
		 * 表态
		 */
		click(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { click: string };

		/**
		 * 权限状态
		 */
		_permission: { click: boolean };

		request: Request;
	}

	interface SiteHomeComment {
		/**
		 * 发表评论
		 */
		addComment(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { addComment: string };

		/**
		 * 权限状态
		 */
		_permission: { addComment: boolean };

		request: Request;
	}

	interface SiteHomeDocomment {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { delete: string; add: string };

		/**
		 * 权限状态
		 */
		_permission: { delete: boolean; add: boolean };

		request: Request;
	}

	interface SiteHomeDoing {
		/**
		 * 好友说说（按好友 userId 集合）
		 */
		listByFriends(data?: any): Promise<any>;

		/**
		 * 推荐说说
		 */
		recommend(data?: any): Promise<any>;

		/**
		 * 我的说说（按 userId 过滤）
		 */
		listByUid(data?: any): Promise<any>;

		/**
		 * 删除我的说说
		 */
		delOwn(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			listByFriends: string;
			recommend: string;
			listByUid: string;
			delOwn: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			listByFriends: boolean;
			recommend: boolean;
			listByUid: boolean;
			delOwn: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface SiteHomeFavorite {
		/**
		 * 收藏分型分页列表（X5 do=favorite）
		 */
		pageFavorites(data?: any): Promise<any>;

		/**
		 * 批量取消收藏（X5 checkall）
		 */
		deleteBatch(data?: any): Promise<any>;

		/**
		 * 我的收藏
		 */
		listByUid(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			pageFavorites: string;
			deleteBatch: string;
			listByUid: string;
			delete: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			pageFavorites: boolean;
			deleteBatch: boolean;
			listByUid: boolean;
			delete: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface SiteHomeFeed {
		/**
		 * 列表查询
		 */
		list(data?: any): Promise<HomeFeedEntity[]>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { list: string; add: string };

		/**
		 * 权限状态
		 */
		_permission: { list: boolean; add: boolean };

		request: Request;
	}

	interface SiteHomeFollow {
		/**
		 * 关注列表
		 */
		following(data?: any): Promise<any>;

		/**
		 * 粉丝列表
		 */
		followers(data?: any): Promise<any>;

		/**
		 * 取消关注
		 */
		unfollow(data?: any): Promise<any>;

		/**
		 * 关注
		 */
		follow(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { following: string; followers: string; unfollow: string; follow: string };

		/**
		 * 权限状态
		 */
		_permission: { following: boolean; followers: boolean; unfollow: boolean; follow: boolean };

		request: Request;
	}

	interface SiteHomeFriend {
		/**
		 * 取消拉黑
		 */
		removeBlacklist(data?: any): Promise<any>;

		/**
		 * 邀请面板好友数据
		 */
		getInviteUsers(data?: any): Promise<any>;

		/**
		 * 共同好友弹层数据（X5 getcfriend）
		 */
		commonFriends(data?: any): Promise<any>;

		/**
		 * 我的屏蔽名单
		 */
		listBlacklist(data?: any): Promise<any>;

		/**
		 * 删除好友
		 */
		removeFriend(data?: any): Promise<any>;

		/**
		 * 拉黑
		 */
		addBlacklist(data?: any): Promise<any>;

		/**
		 * 好友申请列表
		 */
		listRequest(data?: any): Promise<any>;

		/**
		 * 好友移组（批量）
		 */
		changeGroup(data?: any): Promise<any>;

		/**
		 * 好友分组改名
		 */
		renameGroup(data?: any): Promise<any>;

		/**
		 * 好友列表
		 */
		listFriend(data?: any): Promise<any>;

		/**
		 * 好友分组管理面板数据
		 */
		groupList(data?: any): Promise<any>;

		/**
		 * 修改好友备注
		 */
		editNote(data?: any): Promise<any>;

		/**
		 * 发起好友申请
		 */
		request(data?: any): Promise<any>;

		/**
		 * 同意/拒绝申请
		 */
		handle(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			removeBlacklist: string;
			getInviteUsers: string;
			commonFriends: string;
			listBlacklist: string;
			removeFriend: string;
			addBlacklist: string;
			listRequest: string;
			changeGroup: string;
			renameGroup: string;
			listFriend: string;
			groupList: string;
			editNote: string;
			request: string;
			handle: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			removeBlacklist: boolean;
			getInviteUsers: boolean;
			commonFriends: boolean;
			listBlacklist: boolean;
			removeFriend: boolean;
			addBlacklist: boolean;
			listRequest: boolean;
			changeGroup: boolean;
			renameGroup: boolean;
			listFriend: boolean;
			groupList: boolean;
			editNote: boolean;
			request: boolean;
			handle: boolean;
		};

		request: Request;
	}

	interface SiteHomeInvite {
		/**
		 * 重发邮件邀请
		 */
		resendEmailInvite(data?: any): Promise<any>;

		/**
		 * 邀请好友看文章
		 */
		sendArticleInvite(data?: any): Promise<any>;

		/**
		 * 邀请好友到主题
		 */
		sendThreadInvite(data?: any): Promise<any>;

		/**
		 * 邮件邀请
		 */
		sendEmailInvite(data?: any): Promise<any>;

		/**
		 * 邀请好友看日志
		 */
		sendBlogInvite(data?: any): Promise<any>;

		/**
		 * 删除邀请
		 */
		deleteInvite(data?: any): Promise<any>;

		/**
		 * 我的邀请面板
		 */
		listMine(data?: any): Promise<any>;

		/**
		 * 生成邀请码
		 */
		generate(data?: any): Promise<any>;

		/**
		 * 解析邀请（登录态）
		 */
		resolve(data?: any): Promise<any>;

		/**
		 * 接受邀请
		 */
		accept(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			resendEmailInvite: string;
			sendArticleInvite: string;
			sendThreadInvite: string;
			sendEmailInvite: string;
			sendBlogInvite: string;
			deleteInvite: string;
			listMine: string;
			generate: string;
			resolve: string;
			accept: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			resendEmailInvite: boolean;
			sendArticleInvite: boolean;
			sendThreadInvite: boolean;
			sendEmailInvite: boolean;
			sendBlogInvite: boolean;
			deleteInvite: boolean;
			listMine: boolean;
			generate: boolean;
			resolve: boolean;
			accept: boolean;
		};

		request: Request;
	}

	interface SiteHomePic {
		/**
		 * 批量删除图片
		 */
		batchDelete(data?: any): Promise<any>;

		/**
		 * 批量修改图片标题
		 */
		batchTitles(data?: any): Promise<any>;

		/**
		 * 批量移动图片
		 */
		batchMove(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { batchDelete: string; batchTitles: string; batchMove: string; add: string };

		/**
		 * 权限状态
		 */
		_permission: {
			batchDelete: boolean;
			batchTitles: boolean;
			batchMove: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface SiteHomePoke {
		/**
		 * 收到的打招呼
		 */
		listPoke(data?: any): Promise<any>;

		/**
		 * 打招呼
		 */
		poke(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { listPoke: string; poke: string };

		/**
		 * 权限状态
		 */
		_permission: { listPoke: boolean; poke: boolean };

		request: Request;
	}

	interface SiteHomeShare {
		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { add: string };

		/**
		 * 权限状态
		 */
		_permission: { add: boolean };

		request: Request;
	}

	interface SiteHomeShow {
		/**
		 * 给好友竞价
		 */
		bidFriend(data?: any): Promise<any>;

		/**
		 * 竞价榜
		 */
		listShow(data?: any): Promise<any>;

		/**
		 * 自己竞价
		 */
		bid(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { bidFriend: string; listShow: string; bid: string };

		/**
		 * 权限状态
		 */
		_permission: { bidFriend: boolean; listShow: boolean; bid: boolean };

		request: Request;
	}

	interface SiteHomeSpace {
		/**
		 * 留言板列表
		 */
		listWall(data?: any): Promise<any>;

		/**
		 * 空间主页聚合
		 */
		profile(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { listWall: string; profile: string };

		/**
		 * 权限状态
		 */
		_permission: { listWall: boolean; profile: boolean };

		request: Request;
	}

	interface SiteHomeSpacecp {
		/**
		 * 保存邮件订阅设置
		 */
		saveMailSetting(data?: any): Promise<any>;

		/**
		 * 邮件订阅设置
		 */
		getMailSetting(data?: any): Promise<any>;

		/**
		 * 积分转账
		 */
		transferCredit(data?: any): Promise<any>;

		/**
		 * 积分兑换
		 */
		exchangeCredit(data?: any): Promise<any>;

		/**
		 * 我的积分流水
		 */
		myCreditLogs(data?: any): Promise<any>;

		/**
		 * 保存隐私设置
		 */
		savePrivacy(data?: any): Promise<any>;

		/**
		 * 读隐私设置
		 */
		getPrivacy(data?: any): Promise<any>;

		/**
		 * 好友/关注开关
		 */
		setAllow(data?: any): Promise<any>;

		/**
		 * 保存基础设置
		 */
		save(data?: any): Promise<any>;

		/**
		 * 我的空间设置
		 */
		get(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			saveMailSetting: string;
			getMailSetting: string;
			transferCredit: string;
			exchangeCredit: string;
			myCreditLogs: string;
			savePrivacy: string;
			getPrivacy: string;
			setAllow: string;
			save: string;
			get: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			saveMailSetting: boolean;
			getMailSetting: boolean;
			transferCredit: boolean;
			exchangeCredit: boolean;
			myCreditLogs: boolean;
			savePrivacy: boolean;
			getPrivacy: boolean;
			setAllow: boolean;
			save: boolean;
			get: boolean;
		};

		request: Request;
	}

	interface SiteHomeTask {
		/**
		 * 放弃任务（X5 do=giveup 仅进行中，applicants 条件自减）
		 */
		giveup(data?: any): Promise<any>;

		/**
		 * 参与人头像墙（X5 do=parter limit 8）
		 */
		parter(data?: any): Promise<any>;

		/**
		 * 申请任务（X5 do=apply 闸序逐字；gift=申请即领）
		 */
		apply(data?: any): Promise<any>;

		/**
		 * 领奖（X5 do=draw 三态裁决+条件更新防双领+reward 五型+通知）
		 */
		draw(data?: any): Promise<any>;

		/**
		 * 任务列表（X5 space_task item 四态分页，doing 页内惰性重算）
		 */
		list(data?: any): Promise<CommonTaskEntity[]>;

		/**
		 * 任务详情（X5 do=view 状态机 allowapply -1..-6）
		 */
		view(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			giveup: string;
			parter: string;
			apply: string;
			draw: string;
			list: string;
			view: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			giveup: boolean;
			parter: boolean;
			apply: boolean;
			draw: boolean;
			list: boolean;
			view: boolean;
		};

		request: Request;
	}

	interface SiteHomeVisitor {
		/**
		 * 最近访客
		 */
		listVisitor(data?: any): Promise<any>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<HomeVisitorEntity[]>;

		/**
		 * 记录访客
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { listVisitor: string; list: string; add: string };

		/**
		 * 权限状态
		 */
		_permission: { listVisitor: boolean; list: boolean; add: boolean };

		request: Request;
	}

	interface SitePortalArticle {
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<PortalArticleTitleEntity>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<SitePortalArticlePageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { info: string; page: string; add: string };

		/**
		 * 权限状态
		 */
		_permission: { info: boolean; page: boolean; add: boolean };

		request: Request;
	}

	interface SitePortalCategory {
		/**
		 * 频道文章列表
		 */
		listArticles(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<PortalCategoryEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<PortalCategoryEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<SitePortalCategoryPageResponse>;

		/**
		 * 频道树
		 */
		tree(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			listArticles: string;
			info: string;
			list: string;
			page: string;
			tree: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			listArticles: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			tree: boolean;
		};

		request: Request;
	}

	interface SitePortalComment {
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<SitePortalCommentPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { page: string; add: string };

		/**
		 * 权限状态
		 */
		_permission: { page: boolean; add: boolean };

		request: Request;
	}

	interface SitePortalTopic {
		/**
		 * 专题图片列表
		 */
		listPics(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<PortalTopicEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<PortalTopicEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<SitePortalTopicPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { listPics: string; info: string; list: string; page: string; add: string };

		/**
		 * 权限状态
		 */
		_permission: {
			listPics: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface SiteSearchAlbum {
		/**
		 * 相册搜索-结果
		 */
		result(data?: any): Promise<any>;

		/**
		 * 相册搜索-查询
		 */
		query(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { result: string; query: string };

		/**
		 * 权限状态
		 */
		_permission: { result: boolean; query: boolean };

		request: Request;
	}

	interface SiteSearchBlog {
		/**
		 * 日志搜索-结果
		 */
		result(data?: any): Promise<any>;

		/**
		 * 日志搜索-查询
		 */
		query(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { result: string; query: string };

		/**
		 * 权限状态
		 */
		_permission: { result: boolean; query: boolean };

		request: Request;
	}

	interface SiteSearchCollection {
		/**
		 * 淘帖搜索-结果
		 */
		result(data?: any): Promise<any>;

		/**
		 * 淘帖搜索-查询
		 */
		query(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { result: string; query: string };

		/**
		 * 权限状态
		 */
		_permission: { result: boolean; query: boolean };

		request: Request;
	}

	interface SiteSearchForum {
		/**
		 * 论坛搜索-结果
		 */
		result(data?: any): Promise<any>;

		/**
		 * 论坛搜索-查询
		 */
		query(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { result: string; query: string };

		/**
		 * 权限状态
		 */
		_permission: { result: boolean; query: boolean };

		request: Request;
	}

	interface SiteSearchGroup {
		/**
		 * 群组搜索-结果
		 */
		result(data?: any): Promise<any>;

		/**
		 * 群组搜索-查询
		 */
		query(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { result: string; query: string };

		/**
		 * 权限状态
		 */
		_permission: { result: boolean; query: boolean };

		request: Request;
	}

	interface SiteSearchPortal {
		/**
		 * 门户搜索-结果
		 */
		result(data?: any): Promise<any>;

		/**
		 * 门户搜索-查询
		 */
		query(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { result: string; query: string };

		/**
		 * 权限状态
		 */
		_permission: { result: boolean; query: boolean };

		request: Request;
	}

	interface SiteSearchUser {
		/**
		 * 用户搜索-结果
		 */
		result(data?: any): Promise<any>;

		/**
		 * 用户搜索-查询
		 */
		query(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { result: string; query: string };

		/**
		 * 权限状态
		 */
		_permission: { result: boolean; query: boolean };

		request: Request;
	}

	interface SupportArticle {
		/**
		 * 取我对该文档的评分；?id=
		 */
		myEvaluation(data?: any): Promise<any>;

		/**
		 * 给帮助文档评分（1~5 星 + 一句话）
		 */
		evaluate(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { myEvaluation: string; evaluate: string };

		/**
		 * 权限状态
		 */
		_permission: { myEvaluation: boolean; evaluate: boolean };

		request: Request;
	}

	interface SupportChat {
		/**
		 * 排队转工单（客户自己提单）
		 */
		leaveTicket(data?: any): Promise<any>;

		/**
		 * 会话消息（分页，旧的在后）
		 */
		messages(data?: any): Promise<any>;

		/**
		 * 给这次服务打分（1~5 星 + 一句话）
		 */
		evaluate(data?: any): Promise<any>;

		/**
		 * 结束会话
		 */
		close(data?: any): Promise<any>;

		/**
		 * 发起/继续在线客服会话
		 */
		open(data?: any): Promise<any>;

		/**
		 * 发消息（文字/图片/文件）
		 */
		send(data?: any): Promise<any>;

		/**
		 * 我的客服会话
		 */
		list(data?: any): Promise<any[]>;

		/**
		 * 标记已读（游标只前进）
		 */
		read(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			leaveTicket: string;
			messages: string;
			evaluate: string;
			close: string;
			open: string;
			send: string;
			list: string;
			read: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			leaveTicket: boolean;
			messages: boolean;
			evaluate: boolean;
			close: boolean;
			open: boolean;
			send: boolean;
			list: boolean;
			read: boolean;
		};

		request: Request;
	}

	interface SupportComment {
		/**
		 * 发表评论（需登录）
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { add: string };

		/**
		 * 权限状态
		 */
		_permission: { add: boolean };

		request: Request;
	}

	interface SupportTicketTicket {
		/**
		 * 工单评价
		 */
		evaluate(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 用户回复
		 */
		reply(data?: any): Promise<any>;

		/**
		 * 用户关闭工单
		 */
		close(data?: any): Promise<any>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<SupportTicketTicketPageResponse>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<AiosSupportTicketEntity>;

		/**
		 * 提交工单
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			evaluate: string;
			update: string;
			delete: string;
			reply: string;
			close: string;
			page: string;
			info: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			evaluate: boolean;
			update: boolean;
			delete: boolean;
			reply: boolean;
			close: boolean;
			page: boolean;
			info: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface TaokeBill {
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<TaokeBillPageResponse>;

		/**
		 * 权限标识
		 */
		permission: { page: string };

		/**
		 * 权限状态
		 */
		_permission: { page: boolean };

		request: Request;
	}

	interface TaokeComment {
		/**
		 * 列表查询
		 */
		list(data?: any): Promise<TaokeCommentEntity[]>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 我的评论
		 */
		my(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { list: string; add: string; my: string };

		/**
		 * 权限状态
		 */
		_permission: { list: boolean; add: boolean; my: boolean };

		request: Request;
	}

	interface TaokeConvert {
		/**
		 * 转换返利链接
		 */
		convert(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { convert: string };

		/**
		 * 权限状态
		 */
		_permission: { convert: boolean };

		request: Request;
	}

	interface TaokeFavorite {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<TaokeFavoritePageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { delete: string; page: string; add: string };

		/**
		 * 权限状态
		 */
		_permission: { delete: boolean; page: boolean; add: boolean };

		request: Request;
	}

	interface TaokeGoods {
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<TaokeGoodsPageResponse>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<TaokeGoodsEntity>;

		/**
		 * 权限标识
		 */
		permission: { page: string; info: string };

		/**
		 * 权限状态
		 */
		_permission: { page: boolean; info: boolean };

		request: Request;
	}

	interface TaokeOrder {
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<TaokeOrderPageResponse>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<TaokeOrderEntity>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { page: string; info: string; add: string };

		/**
		 * 权限状态
		 */
		_permission: { page: boolean; info: boolean; add: boolean };

		request: Request;
	}

	interface TaokeTicket {
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<TaokeTicketPageResponse>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<TaokeTicketEntity>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { page: string; info: string; add: string };

		/**
		 * 权限状态
		 */
		_permission: { page: boolean; info: boolean; add: boolean };

		request: Request;
	}

	interface TaokeTipoff {
		/**
		 * 折淘客实时线报
		 */
		zhetaoke(data?: any): Promise<any>;

		/**
		 * 大淘客实时线报
		 */
		dataoke(data?: any): Promise<any>;

		/**
		 * 获取线报详情（含实时转链）
		 */
		detailWithConvert(data?: any): Promise<any>;

		/**
		 * 聚合线报分页
		 */
		aggregatePage(data?: any): Promise<any>;

		/**
		 * 线报排行榜
		 */
		rank(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<TaokeTipoffEntity>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<TaokeTipoffPageResponse>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<TaokeTipoffEntity[]>;

		/**
		 * 权限标识
		 */
		permission: {
			zhetaoke: string;
			dataoke: string;
			detailWithConvert: string;
			aggregatePage: string;
			rank: string;
			info: string;
			page: string;
			list: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			zhetaoke: boolean;
			dataoke: boolean;
			detailWithConvert: boolean;
			aggregatePage: boolean;
			rank: boolean;
			info: boolean;
			page: boolean;
			list: boolean;
		};

		request: Request;
	}

	interface TaokeUser {
		/**
		 * 更新用户设置
		 */
		update(data?: any): Promise<any>;

		/**
		 * 用户仪表盘
		 */
		dashboard(data?: any): Promise<any>;

		/**
		 * 获取用户设置
		 */
		settings(data?: any): Promise<any>;

		/**
		 * 更新淘客用户信息
		 */
		update(data?: any): Promise<any>;

		/**
		 * 获取淘客用户信息
		 */
		info(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { update: string; dashboard: string; settings: string; info: string };

		/**
		 * 权限状态
		 */
		_permission: { update: boolean; dashboard: boolean; settings: boolean; info: boolean };

		request: Request;
	}

	interface TaokeVip {
		/**
		 * 会员套餐
		 */
		plans(data?: any): Promise<any>;

		/**
		 * 会员状态
		 */
		info(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { plans: string; info: string };

		/**
		 * 权限状态
		 */
		_permission: { plans: boolean; info: boolean };

		request: Request;
	}

	interface UcenterAccount {
		/**
		 * 更换邮箱(原密码+新邮箱验证码)
		 */
		changeEmail(data?: any): Promise<any>;

		/**
		 * 更换手机(原密码+新手机验证码)
		 */
		changePhone(data?: any): Promise<any>;

		/**
		 * 绑定邮箱(验证码确认所有权)
		 */
		bindEmail(data?: any): Promise<any>;

		/**
		 * 绑定手机(验证码确认所有权)
		 */
		bindPhone(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			changeEmail: string;
			changePhone: string;
			bindEmail: string;
			bindPhone: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			changeEmail: boolean;
			changePhone: boolean;
			bindEmail: boolean;
			bindPhone: boolean;
		};

		request: Request;
	}

	interface UcenterAddress {
		/**
		 * 默认地址
		 */
		default(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<UcenterUserAddressEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<UcenterUserAddressEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<UcenterAddressPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			default: string;
			update: string;
			delete: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			default: boolean;
			update: boolean;
			delete: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface UcenterAuth {
		/**
		 * 忘记密码
		 */
		forgotPassword(data?: any): Promise<any>;

		/**
		 * 密码登录
		 */
		passwordLogin(data?: any): Promise<any>;

		/**
		 * 刷新Token
		 */
		refreshToken(data?: any): Promise<any>;

		/**
		 * 手机验证码登录
		 */
		phoneLogin(data?: any): Promise<any>;

		/**
		 * 邮箱验证码登录
		 */
		emailLogin(data?: any): Promise<any>;

		/**
		 * 小程序手机号（getPhoneNumber 解密）
		 */
		miniPhone(data?: any): Promise<any>;

		/**
		 * 发送邮箱验证码
		 */
		emailCode(data?: any): Promise<any>;

		/**
		 * 注册
		 */
		register(data?: any): Promise<any>;

		/**
		 * 发送短信验证码
		 */
		smsCode(data?: any): Promise<any>;

		/**
		 * 微信小程序登录
		 */
		wxMini(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			forgotPassword: string;
			passwordLogin: string;
			refreshToken: string;
			phoneLogin: string;
			emailLogin: string;
			miniPhone: string;
			emailCode: string;
			register: string;
			smsCode: string;
			wxMini: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			forgotPassword: boolean;
			passwordLogin: boolean;
			refreshToken: boolean;
			phoneLogin: boolean;
			emailLogin: boolean;
			miniPhone: boolean;
			emailCode: boolean;
			register: boolean;
			smsCode: boolean;
			wxMini: boolean;
		};

		request: Request;
	}

	interface UcenterConfig {
		/**
		 * 通知渠道测试推送
		 */
		testNotification(data?: any): Promise<any>;

		/**
		 * 获取本人设置表单结构
		 */
		schema(data?: any): Promise<any>;

		/**
		 * 保存本人设置
		 */
		update(data?: any): Promise<any>;

		/**
		 * 读取本人设置
		 */
		info(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { testNotification: string; schema: string; update: string; info: string };

		/**
		 * 权限状态
		 */
		_permission: { testNotification: boolean; schema: boolean; update: boolean; info: boolean };

		request: Request;
	}

	interface UcenterCredit {
		/**
		 * 当前用户积分与等级
		 */
		info(data?: any): Promise<any>;

		/**
		 * 我的积分流水
		 */
		log(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { info: string; log: string };

		/**
		 * 权限状态
		 */
		_permission: { info: boolean; log: boolean };

		request: Request;
	}

	interface UcenterFeed {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<UcenterFeedEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<UcenterFeedEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<UcenterFeedPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface UcenterNotification {
		/**
		 * 全部标记已读（传 type 只清那一栏）
		 */
		markAllRead(data?: any): Promise<any>;

		/**
		 * 站内信分类清单
		 */
		categories(data?: any): Promise<any>;

		/**
		 * 标记已读
		 */
		markRead(data?: any): Promise<any>;

		/**
		 * 收件箱统计（总数/未读/按分类未读）
		 */
		stats(data?: any): Promise<any>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<UcenterNotificationPageResponse>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<UcenterNotificationEntity[]>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<UcenterNotificationEntity>;

		/**
		 * 权限标识
		 */
		permission: {
			markAllRead: string;
			categories: string;
			markRead: string;
			stats: string;
			page: string;
			list: string;
			info: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			markAllRead: boolean;
			categories: boolean;
			markRead: boolean;
			stats: boolean;
			page: boolean;
			list: boolean;
			info: boolean;
		};

		request: Request;
	}

	interface UcenterPm {
		/**
		 * 删除单条消息(仅单聊)
		 */
		deleteMessage(data?: any): Promise<any>;

		/**
		 * 创建群聊
		 */
		createGroup(data?: any): Promise<any>;

		/**
		 * 未读总数(角标)
		 */
		unreadTotal(data?: any): Promise<any>;

		/**
		 * 保存私信接收范围(X5 op=setting 提交)
		 */
		saveSetting(data?: any): Promise<any>;

		/**
		 * 本会话免打扰/置顶(只改我自己那行)
		 */
		setFlags(data?: any): Promise<any>;

		/**
		 * 解散群聊(仅群主, 物理全清)
		 */
		dissolve(data?: any): Promise<any>;

		/**
		 * 解除拉黑
		 */
		unblock(data?: any): Promise<any>;

		/**
		 * 私信设置(接收范围+黑名单列表, X5 op=setting)
		 */
		setting(data?: any): Promise<any>;

		/**
		 * 删除会话(当前用户视角)
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 撤回消息(限时)
		 */
		revoke(data?: any): Promise<any>;

		/**
		 * 邀请成员入群(仅群主)
		 */
		invite(data?: any): Promise<any>;

		/**
		 * 会话详情(群信息+成员列表)
		 */
		detail(data?: any): Promise<any>;

		/**
		 * 举报私信(X5 op=pm_report)
		 */
		report(data?: any): Promise<any>;

		/**
		 * 导出会话HTML(X5 op=export, SPA 回内容前端下载)
		 */
		export(data?: any): Promise<any>;

		/**
		 * 拉黑
		 */
		block(data?: any): Promise<any>;

		/**
		 * 发消息(单聊 or 会话内, 支持文字与图片/语音/视频/文件)
		 */
		send(data?: any): Promise<any>;

		/**
		 * 会话列表
		 */
		list(data?: any): Promise<any[]>;

		/**
		 * 读会话(消息分页)
		 */
		read(data?: any): Promise<any>;

		/**
		 * 踢出群成员(仅群主)
		 */
		kick(data?: any): Promise<any>;

		/**
		 * 退群(群主不可退)
		 */
		quit(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			deleteMessage: string;
			createGroup: string;
			unreadTotal: string;
			saveSetting: string;
			setFlags: string;
			dissolve: string;
			unblock: string;
			setting: string;
			delete: string;
			revoke: string;
			invite: string;
			detail: string;
			report: string;
			export: string;
			block: string;
			send: string;
			list: string;
			read: string;
			kick: string;
			quit: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			deleteMessage: boolean;
			createGroup: boolean;
			unreadTotal: boolean;
			saveSetting: boolean;
			setFlags: boolean;
			dissolve: boolean;
			unblock: boolean;
			setting: boolean;
			delete: boolean;
			revoke: boolean;
			invite: boolean;
			detail: boolean;
			report: boolean;
			export: boolean;
			block: boolean;
			send: boolean;
			list: boolean;
			read: boolean;
			kick: boolean;
			quit: boolean;
		};

		request: Request;
	}

	interface UcenterProfile {
		/**
		 * 修改密码
		 */
		changePassword(data?: any): Promise<any>;

		/**
		 * 安全评分
		 */
		securityScore(data?: any): Promise<any>;

		/**
		 * 更新个人信息
		 */
		updatePerson(data?: any): Promise<any>;

		/**
		 * 取消注销
		 */
		cancelLogoff(data?: any): Promise<any>;

		/**
		 * 上传头像（上传 + 更新 avatarUrl）
		 */
		uploadAvatar(data?: any): Promise<any>;

		/**
		 * 首次设置登录密码（无旧密码）
		 */
		setPassword(data?: any): Promise<any>;

		/**
		 * 申请注销
		 */
		applyLogoff(data?: any): Promise<any>;

		/**
		 * 退出所有设备（已发凭证当场全部作废）
		 */
		logoutAll(data?: any): Promise<any>;

		/**
		 * 获取个人信息
		 */
		person(data?: any): Promise<any>;

		/**
		 * 用户搜索（用户名/昵称）
		 */
		search(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			changePassword: string;
			securityScore: string;
			updatePerson: string;
			cancelLogoff: string;
			uploadAvatar: string;
			setPassword: string;
			applyLogoff: string;
			logoutAll: string;
			person: string;
			search: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			changePassword: boolean;
			securityScore: boolean;
			updatePerson: boolean;
			cancelLogoff: boolean;
			uploadAvatar: boolean;
			setPassword: boolean;
			applyLogoff: boolean;
			logoutAll: boolean;
			person: boolean;
			search: boolean;
		};

		request: Request;
	}

	interface UcenterSecurity {
		/**
		 * 找回密码①：按账号取题目
		 */
		questions(data?: any): Promise<any>;

		/**
		 * 找回密码②：答题换一次性凭证
		 */
		verify(data?: any): Promise<any>;

		/**
		 * 清除我的密保（必验登录密码）
		 */
		clear(data?: any): Promise<any>;

		/**
		 * 题池（设置页选题）
		 */
		pool(data?: any): Promise<any>;

		/**
		 * 我已设置的密保题目
		 */
		mine(data?: any): Promise<any>;

		/**
		 * 设置/更换密保（必验登录密码）
		 */
		save(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			questions: string;
			verify: string;
			clear: string;
			pool: string;
			mine: string;
			save: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			questions: boolean;
			verify: boolean;
			clear: boolean;
			pool: boolean;
			mine: boolean;
			save: boolean;
		};

		request: Request;
	}

	interface UcenterTag {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<UcenterTagEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<UcenterTagEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<UcenterTagPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface UcenterUserLog {
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<UcenterUserLogPageResponse>;

		/**
		 * 权限标识
		 */
		permission: { page: string };

		/**
		 * 权限状态
		 */
		_permission: { page: boolean };

		request: Request;
	}

	interface UcenterWx {
		/**
		 * 获取微信JS-SDK配置
		 */
		wxMpConfig(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { wxMpConfig: string };

		/**
		 * 权限状态
		 */
		_permission: { wxMpConfig: boolean };

		request: Request;
	}

	interface WechatMessage {
		/**
		 * handleMsg
		 */
		handleMsg(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { handleMsg: string };

		/**
		 * 权限状态
		 */
		_permission: { handleMsg: boolean };

		request: Request;
	}

	interface BaseComm {
		/**
		 * 文件上传模式
		 */
		uploadMode(data?: any): Promise<any>;

		/**
		 * 文件上传
		 */
		upload(data?: any): Promise<any>;

		/**
		 * 参数配置
		 */
		param(data?: any): Promise<any>;

		/**
		 * 实体信息与路径
		 */
		eps(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { uploadMode: string; upload: string; param: string; eps: string };

		/**
		 * 权限状态
		 */
		_permission: { uploadMode: boolean; upload: boolean; param: boolean; eps: boolean };

		request: Request;
	}

	interface DictInfo {
		/**
		 * 获得所有字典类型
		 */
		types(data?: any): Promise<any>;

		/**
		 * 获得字典数据
		 */
		data(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { types: string; data: string };

		/**
		 * 权限状态
		 */
		_permission: { types: boolean; data: boolean };

		request: Request;
	}

	interface UserAddress {
		/**
		 * 默认地址
		 */
		default(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<UserAddressEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<UserAddressEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<UserAddressPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			default: string;
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			default: boolean;
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface UserComm {
		/**
		 * 获取微信公众号配置
		 */
		wxMpConfig(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { wxMpConfig: string };

		/**
		 * 权限状态
		 */
		_permission: { wxMpConfig: boolean };

		request: Request;
	}

	interface UserInfo {
		/**
		 * 更新用户密码
		 */
		updatePassword(data?: any): Promise<any>;

		/**
		 * 更新用户信息
		 */
		updatePerson(data?: any): Promise<any>;

		/**
		 * 绑定手机号
		 */
		bindPhone(data?: any): Promise<any>;

		/**
		 * 绑定小程序手机号
		 */
		miniPhone(data?: any): Promise<any>;

		/**
		 * 获取用户信息
		 */
		person(data?: any): Promise<any>;

		/**
		 * 注销
		 */
		logoff(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			updatePassword: string;
			updatePerson: string;
			bindPhone: string;
			miniPhone: string;
			person: string;
			logoff: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			updatePassword: boolean;
			updatePerson: boolean;
			bindPhone: boolean;
			miniPhone: boolean;
			person: boolean;
			logoff: boolean;
		};

		request: Request;
	}

	interface UserLogin {
		/**
		 * 刷新token
		 */
		refreshToken(data?: any): Promise<any>;

		/**
		 * 绑定小程序手机号
		 */
		miniPhone(data?: any): Promise<any>;

		/**
		 * 一键手机号登录
		 */
		uniPhone(data?: any): Promise<any>;

		/**
		 * 密码登录
		 */
		password(data?: any): Promise<any>;

		/**
		 * 注册
		 */
		register(data?: any): Promise<any>;

		/**
		 * 图片验证码
		 */
		captcha(data?: any): Promise<any>;

		/**
		 * 验证码
		 */
		smsCode(data?: any): Promise<any>;

		/**
		 * 微信APP授权登录
		 */
		wxApp(data?: any): Promise<any>;

		/**
		 * 手机号登录
		 */
		phone(data?: any): Promise<any>;

		/**
		 * 小程序登录
		 */
		mini(data?: any): Promise<any>;

		/**
		 * 公众号登录
		 */
		mp(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			refreshToken: string;
			miniPhone: string;
			uniPhone: string;
			password: string;
			register: string;
			captcha: string;
			smsCode: string;
			wxApp: string;
			phone: string;
			mini: string;
			mp: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			refreshToken: boolean;
			miniPhone: boolean;
			uniPhone: boolean;
			password: boolean;
			register: boolean;
			captcha: boolean;
			smsCode: boolean;
			wxApp: boolean;
			phone: boolean;
			mini: boolean;
			mp: boolean;
		};

		request: Request;
	}

	interface RequestOptions {
		url: string;
		method?: "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT";
		data?: any;
		params?: any;
		headers?: any;
		timeout?: number;
		[key: string]: any;
	}

	type Request = (options: RequestOptions) => Promise<any>;

	type Service = {
		request: Request;

		licensing: { app: LicensingApp; license: LicensingLicense };
		pintuan: {
			auth: PintuanAuth;
			benefit: PintuanBenefit;
			commission: PintuanCommission;
			exchange: PintuanExchange;
			follow: PintuanFollow;
			invite: PintuanInvite;
			lottery: PintuanLottery;
			poster: PintuanPoster;
			review: PintuanReview;
			task: PintuanTask;
			team: PintuanTeam;
		};
		promote: { comm: PromoteComm; copywriting: PromoteCopywriting };
		saltfish: {
			comm: SaltfishComm;
			product: SaltfishProduct;
			script: { bug: SaltfishScriptBug };
			spider: {
				common: SaltfishSpiderCommon;
				idlefish: SaltfishSpiderIdlefish;
				pinduoduo: SaltfishSpiderPinduoduo;
			};
		};
		site: {
			blog: { article: SiteBlogArticle; comment: SiteBlogComment };
			forum: {
				activity: SiteForumActivity;
				announcement: SiteForumAnnouncement;
				attachment: SiteForumAttachment;
				bbcode: SiteForumBbcode;
				collectionComment: SiteForumCollectionComment;
				collectionFollow: SiteForumCollectionFollow;
				collectionInvite: SiteForumCollectionInvite;
				collection: SiteForumCollection;
				debate: SiteForumDebate;
				favorite: SiteForumFavorite;
				group: SiteForumGroup;
				hotreply: SiteForumHotreply;
				like: SiteForumLike;
				magic: SiteForumMagic;
				medal: SiteForumMedal;
				modcp: SiteForumModcp;
				poll: SiteForumPoll;
				postComment: SiteForumPostComment;
				post: SiteForumPost;
				rate: SiteForumRate;
				recommend: SiteForumRecommend;
				report: SiteForumReport;
				reward: SiteForumReward;
				rushreply: SiteForumRushreply;
				stats: SiteForumStats;
				tag: SiteForumTag;
				thread: SiteForumThread;
				threadcover: SiteForumThreadcover;
				trade: SiteForumTrade;
			};
			group: { user: SiteGroupUser };
			home: {
				album: SiteHomeAlbum;
				blog: SiteHomeBlog;
				click: SiteHomeClick;
				comment: SiteHomeComment;
				docomment: SiteHomeDocomment;
				doing: SiteHomeDoing;
				favorite: SiteHomeFavorite;
				feed: SiteHomeFeed;
				follow: SiteHomeFollow;
				friend: SiteHomeFriend;
				invite: SiteHomeInvite;
				pic: SiteHomePic;
				poke: SiteHomePoke;
				share: SiteHomeShare;
				show: SiteHomeShow;
				space: SiteHomeSpace;
				spacecp: SiteHomeSpacecp;
				task: SiteHomeTask;
				visitor: SiteHomeVisitor;
			};
			portal: {
				article: SitePortalArticle;
				category: SitePortalCategory;
				comment: SitePortalComment;
				topic: SitePortalTopic;
			};
			search: {
				album: SiteSearchAlbum;
				blog: SiteSearchBlog;
				collection: SiteSearchCollection;
				forum: SiteSearchForum;
				group: SiteSearchGroup;
				portal: SiteSearchPortal;
				user: SiteSearchUser;
			};
		};
		support: {
			article: SupportArticle;
			chat: SupportChat;
			comment: SupportComment;
			ticket: { ticket: SupportTicketTicket };
		};
		taoke: {
			bill: TaokeBill;
			comment: TaokeComment;
			convert: TaokeConvert;
			favorite: TaokeFavorite;
			goods: TaokeGoods;
			order: TaokeOrder;
			ticket: TaokeTicket;
			tipoff: TaokeTipoff;
			user: TaokeUser;
			vip: TaokeVip;
		};
		ucenter: {
			account: UcenterAccount;
			address: UcenterAddress;
			auth: UcenterAuth;
			config: UcenterConfig;
			credit: UcenterCredit;
			feed: UcenterFeed;
			notification: UcenterNotification;
			pm: UcenterPm;
			profile: UcenterProfile;
			security: UcenterSecurity;
			tag: UcenterTag;
			userLog: UcenterUserLog;
			wx: UcenterWx;
		};
		wechat: { message: WechatMessage };
		base: { comm: BaseComm };
		dict: { info: DictInfo };
		user: { address: UserAddress; comm: UserComm; info: UserInfo; login: UserLogin };
	};
}
