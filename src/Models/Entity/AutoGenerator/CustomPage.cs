﻿//------------------------------------------------------------------------------
// <auto-generated>
//     此代码由WEF.ModelGenerator, Version=4.0.0.0, Culture=neutral, PublicKeyToken=null生成;时间 2018-11-12 14:37:16.167
//     运行时版本:4.0.30319.42000
//     不建议手动更改此代码，如有需要请自行扩展partial类
// </auto-generated>
//------------------------------------------------------------------------------


using System;
using System.Runtime.Serialization;
using WEF;
using WEF.Common;
using WEF.Section;
using System.Collections.Generic;

namespace WebBaseFrame.Models
{

	/// <summary>
	/// 实体类CustomPage
	/// </summary>
	[Serializable, DataContract]
	public partial class CustomPage : Entity 
	{
		private static string m_tableName;
		public CustomPage():base("CustomPage") {m_tableName="CustomPage";}
		public CustomPage(string tableName):base(tableName) { m_tableName=tableName;}

		#region Model
		private int _ID;
		private int? _Type;
		private string _Controller;
		private string _Action;
		private string _Path;
		private string _EditContent;
		private DateTime? _CreateDate;
		private int? _CreateUserID;
		private DateTime? _LastUpdateDate;
		private int? _LastUpdateUserID;
		private bool? _IsDeleted;
		/// <summary>
		/// ID 
		/// </summary>
		[DataMember]
		public int ID
		{
			get{ return _ID; }
			set
			{
				this.OnPropertyValueChange(_.ID,_ID,value);
				this._ID=value;
			}
		}
		/// <summary>
		/// Type 
		/// </summary>
		[DataMember]
		public int? Type
		{
			get{ return _Type; }
			set
			{
				this.OnPropertyValueChange(_.Type,_Type,value);
				this._Type=value;
			}
		}
		/// <summary>
		/// Controller 
		/// </summary>
		[DataMember]
		public string Controller
		{
			get{ return _Controller; }
			set
			{
				this.OnPropertyValueChange(_.Controller,_Controller,value);
				this._Controller=value;
			}
		}
		/// <summary>
		/// Action 
		/// </summary>
		[DataMember]
		public string Action
		{
			get{ return _Action; }
			set
			{
				this.OnPropertyValueChange(_.Action,_Action,value);
				this._Action=value;
			}
		}
		/// <summary>
		/// Path 
		/// </summary>
		[DataMember]
		public string Path
		{
			get{ return _Path; }
			set
			{
				this.OnPropertyValueChange(_.Path,_Path,value);
				this._Path=value;
			}
		}
		/// <summary>
		/// EditContent 
		/// </summary>
		[DataMember]
		public string EditContent
		{
			get{ return _EditContent; }
			set
			{
				this.OnPropertyValueChange(_.EditContent,_EditContent,value);
				this._EditContent=value;
			}
		}
		/// <summary>
		/// CreateDate 
		/// </summary>
		[DataMember]
		public DateTime? CreateDate
		{
			get{ return _CreateDate; }
			set
			{
				this.OnPropertyValueChange(_.CreateDate,_CreateDate,value);
				this._CreateDate=value;
			}
		}
		/// <summary>
		/// CreateUserID 
		/// </summary>
		[DataMember]
		public int? CreateUserID
		{
			get{ return _CreateUserID; }
			set
			{
				this.OnPropertyValueChange(_.CreateUserID,_CreateUserID,value);
				this._CreateUserID=value;
			}
		}
		/// <summary>
		/// LastUpdateDate 
		/// </summary>
		[DataMember]
		public DateTime? LastUpdateDate
		{
			get{ return _LastUpdateDate; }
			set
			{
				this.OnPropertyValueChange(_.LastUpdateDate,_LastUpdateDate,value);
				this._LastUpdateDate=value;
			}
		}
		/// <summary>
		/// LastUpdateUserID 
		/// </summary>
		[DataMember]
		public int? LastUpdateUserID
		{
			get{ return _LastUpdateUserID; }
			set
			{
				this.OnPropertyValueChange(_.LastUpdateUserID,_LastUpdateUserID,value);
				this._LastUpdateUserID=value;
			}
		}
		/// <summary>
		/// IsDeleted 
		/// </summary>
		[DataMember]
		public bool? IsDeleted
		{
			get{ return _IsDeleted; }
			set
			{
				this.OnPropertyValueChange(_.IsDeleted,_IsDeleted,value);
				this._IsDeleted=value;
			}
		}
		#endregion

		#region Method
		/// <summary>
		/// 获取实体中的标识列
		/// </summary>
		public override Field GetIdentityField()
		{
			return _.ID;
		}
		/// <summary>
		/// 获取实体中的主键列
		/// </summary>
		public override Field[] GetPrimaryKeyFields()
		{
			return new Field[] {
				_.ID};
		}
		/// <summary>
		/// 获取列信息
		/// </summary>
		public override Field[] GetFields()
		{
			return new Field[] {
				_.ID,
				_.Type,
				_.Controller,
				_.Action,
				_.Path,
				_.EditContent,
				_.CreateDate,
				_.CreateUserID,
				_.LastUpdateDate,
				_.LastUpdateUserID,
				_.IsDeleted};
		}
		/// <summary>
		/// 获取值信息
		/// </summary>
		public override object[] GetValues()
		{
			return new object[] {
				this._ID,
				this._Type,
				this._Controller,
				this._Action,
				this._Path,
				this._EditContent,
				this._CreateDate,
				this._CreateUserID,
				this._LastUpdateDate,
				this._LastUpdateUserID,
				this._IsDeleted};
		}
		#endregion

		#region _Field
		/// <summary>
		/// 字段信息
		/// </summary>
		public class _
		{
			/// <summary>
			/// CustomPage 
			/// </summary>
			public readonly static Field All = new Field("*",m_tableName);
			/// <summary>
			/// ID 
			/// </summary>
			public readonly static Field ID = new Field("ID",m_tableName,"ID");
			/// <summary>
			/// Type 
			/// </summary>
			public readonly static Field Type = new Field("Type",m_tableName,"Type");
			/// <summary>
			/// Controller 
			/// </summary>
			public readonly static Field Controller = new Field("Controller",m_tableName,"Controller");
			/// <summary>
			/// Action 
			/// </summary>
			public readonly static Field Action = new Field("Action",m_tableName,"Action");
			/// <summary>
			/// Path 
			/// </summary>
			public readonly static Field Path = new Field("Path",m_tableName,"Path");
			/// <summary>
			/// EditContent 
			/// </summary>
			public readonly static Field EditContent = new Field("EditContent",m_tableName,"EditContent");
			/// <summary>
			/// CreateDate 
			/// </summary>
			public readonly static Field CreateDate = new Field("CreateDate",m_tableName,"CreateDate");
			/// <summary>
			/// CreateUserID 
			/// </summary>
			public readonly static Field CreateUserID = new Field("CreateUserID",m_tableName,"CreateUserID");
			/// <summary>
			/// LastUpdateDate 
			/// </summary>
			public readonly static Field LastUpdateDate = new Field("LastUpdateDate",m_tableName,"LastUpdateDate");
			/// <summary>
			/// LastUpdateUserID 
			/// </summary>
			public readonly static Field LastUpdateUserID = new Field("LastUpdateUserID",m_tableName,"LastUpdateUserID");
			/// <summary>
			/// IsDeleted 
			/// </summary>
			public readonly static Field IsDeleted = new Field("IsDeleted",m_tableName,"IsDeleted");
		}
		#endregion


	}
	/// <summary>
	/// 实体类CustomPage操作类
	/// </summary>
	public partial class CustomPageRepository
	{
		DBContext db;
		/// <summary>
		/// 当前实体查询上下文
		/// </summary>
		public ISearch<CustomPage> Search(string tableName="")
		{
			if (string.IsNullOrEmpty(tableName))
			{
				tableName="CustomPage";
			}
				return db.Search<CustomPage>(tableName);
		}
		/// <summary>
		/// 当前实体查询上下文
		/// </summary>
		public ISearch<CustomPage> Search(CustomPage entity)
		{
				return db.Search<CustomPage>(entity);
		}
		/// <summary>
		/// 构造方法
		/// </summary>
		public CustomPageRepository()
		{
			db = new DBContext();
		}
		/// <summary>
		/// 构造方法
		/// <param name="connStrName">连接字符串中的名称</param>
		/// </summary>
		public CustomPageRepository(string connStrName)
		{
			db = new DBContext(connStrName);
		}
		/// <summary>
		/// 当前db操作上下文
		/// </summary>
		public DBContext DBContext
		{
			get
			{
				return db;
			}
		}
		/// <summary>
		/// 获取实体
		/// <param name="pageIndex">分页第几页</param>
		/// <param name="pageSize">分页一页取值</param>
		/// </summary>
		public CustomPage GetCustomPage(int id)
		{
			return Search().Where(b => b.ID == id).First();
		}
		/// <summary>
		/// 获取列表
		/// <param name="pageIndex">分页第几页</param>
		/// <param name="pageSize">分页一页取值</param>
		/// </summary>
		public List<CustomPage> GetList(int pageIndex, int pageSize)
		{
			return this.Search().Page(pageIndex, pageSize).ToList();
		}
		/// <summary>
		/// 获取列表
		/// <param name="tableName">表名</param>
		/// <param name="pageIndex">分页第几页</param>
		/// <param name="pageSize">分页一页取值</param>
		/// </summary>
		public List<CustomPage> GetList(string tableName, int pageIndex=1, int pageSize=12)
		{
			return this.Search(tableName).Page(pageIndex, pageSize).ToList();
		}
		/// <summary>
		/// 添加实体
		/// <param name="obj">传进的实体</param>
		/// </summary>
		public int Insert(CustomPage obj)
		{
			return db.Insert(obj);
		}
		/// <summary>
		/// 更新实体
		/// <param name="obj">传进的实体</param>
		/// </summary>
		public int Update(CustomPage obj)
		{
			return db.Update(obj);
		}
		/// <summary>
		/// 删除实体
		/// <param name="obj">传进的实体</param>
		/// </summary>
		public int Delete(CustomPage obj)
		{
			return db.Delete(obj);
		}
		/// <summary>
		/// 删除实体
		/// <param name="id">id</param>
		/// </summary>
		public int Delete(int id)
		{
			var obj = Search().Where(b => b.ID == id).First();
			return db.Delete(obj);
		}
		/// <summary>
		/// 批量删除实体
		/// <param name="obj">传进的实体列表</param>
		/// </summary>
		public int Deletes(List<CustomPage> objs)
		{
			return db.Delete<CustomPage>(objs);
		}
		/// <summary>
		/// 执行sql语句
		/// <param name="sql"></param>
		/// </summary>
		public SqlSection ExecuteSQL(string sql)
		{
			return db.FromSql(sql);
		}
		/// <summary>
		/// 执行存储过程
		/// <param name="sql"></param>
		/// </summary>
		public ProcSection ExcuteProc(string procName)
		{
			return db.FromProc(procName);
		}
	}

}

