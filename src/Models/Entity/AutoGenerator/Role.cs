﻿//------------------------------------------------------------------------------
// <auto-generated>
//     此代码由WEF.ModelGenerator, Version=4.0.0.0, Culture=neutral, PublicKeyToken=null生成;时间 2018-11-12 14:37:16.573
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
	/// 实体类Role
	/// </summary>
	[Serializable, DataContract]
	public partial class Role : Entity 
	{
		private static string m_tableName;
		public Role():base("Role") {m_tableName="Role";}
		public Role(string tableName):base(tableName) { m_tableName=tableName;}

		#region Model
		private int _ID;
		private string _RoleName;
		private string _Description;
		private int? _CreateUserID;
		private int? _LastUpdateUserID;
		private DateTime? _CreateDate;
		private DateTime? _LastUpdateDate;
		private bool _IsDeleted;
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
		/// RoleName 角色名称
		/// </summary>
		[DataMember]
		public string RoleName
		{
			get{ return _RoleName; }
			set
			{
				this.OnPropertyValueChange(_.RoleName,_RoleName,value);
				this._RoleName=value;
			}
		}
		/// <summary>
		/// Description 角色描述
		/// </summary>
		[DataMember]
		public string Description
		{
			get{ return _Description; }
			set
			{
				this.OnPropertyValueChange(_.Description,_Description,value);
				this._Description=value;
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
		/// IsDeleted 
		/// </summary>
		[DataMember]
		public bool IsDeleted
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
				_.RoleName,
				_.Description,
				_.CreateUserID,
				_.LastUpdateUserID,
				_.CreateDate,
				_.LastUpdateDate,
				_.IsDeleted};
		}
		/// <summary>
		/// 获取值信息
		/// </summary>
		public override object[] GetValues()
		{
			return new object[] {
				this._ID,
				this._RoleName,
				this._Description,
				this._CreateUserID,
				this._LastUpdateUserID,
				this._CreateDate,
				this._LastUpdateDate,
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
			/// Role 
			/// </summary>
			public readonly static Field All = new Field("*",m_tableName);
			/// <summary>
			/// ID 
			/// </summary>
			public readonly static Field ID = new Field("ID",m_tableName,"ID");
			/// <summary>
			/// RoleName 角色名称
			/// </summary>
			public readonly static Field RoleName = new Field("RoleName",m_tableName,"角色名称");
			/// <summary>
			/// Description 角色描述
			/// </summary>
			public readonly static Field Description = new Field("Description",m_tableName,"角色描述");
			/// <summary>
			/// CreateUserID 
			/// </summary>
			public readonly static Field CreateUserID = new Field("CreateUserID",m_tableName,"CreateUserID");
			/// <summary>
			/// LastUpdateUserID 
			/// </summary>
			public readonly static Field LastUpdateUserID = new Field("LastUpdateUserID",m_tableName,"LastUpdateUserID");
			/// <summary>
			/// CreateDate 
			/// </summary>
			public readonly static Field CreateDate = new Field("CreateDate",m_tableName,"CreateDate");
			/// <summary>
			/// LastUpdateDate 
			/// </summary>
			public readonly static Field LastUpdateDate = new Field("LastUpdateDate",m_tableName,"LastUpdateDate");
			/// <summary>
			/// IsDeleted 
			/// </summary>
			public readonly static Field IsDeleted = new Field("IsDeleted",m_tableName,"IsDeleted");
		}
		#endregion


	}
	/// <summary>
	/// 实体类Role操作类
	/// </summary>
	public partial class RoleRepository
	{
		DBContext db;
		/// <summary>
		/// 当前实体查询上下文
		/// </summary>
		public ISearch<Role> Search(string tableName="")
		{
			if (string.IsNullOrEmpty(tableName))
			{
				tableName="Role";
			}
				return db.Search<Role>(tableName);
		}
		/// <summary>
		/// 当前实体查询上下文
		/// </summary>
		public ISearch<Role> Search(Role entity)
		{
				return db.Search<Role>(entity);
		}
		/// <summary>
		/// 构造方法
		/// </summary>
		public RoleRepository()
		{
			db = new DBContext();
		}
		/// <summary>
		/// 构造方法
		/// <param name="connStrName">连接字符串中的名称</param>
		/// </summary>
		public RoleRepository(string connStrName)
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
		public Role GetRole(int id)
		{
			return Search().Where(b => b.ID == id).First();
		}
		/// <summary>
		/// 获取列表
		/// <param name="pageIndex">分页第几页</param>
		/// <param name="pageSize">分页一页取值</param>
		/// </summary>
		public List<Role> GetList(int pageIndex, int pageSize)
		{
			return this.Search().Page(pageIndex, pageSize).ToList();
		}
		/// <summary>
		/// 获取列表
		/// <param name="tableName">表名</param>
		/// <param name="pageIndex">分页第几页</param>
		/// <param name="pageSize">分页一页取值</param>
		/// </summary>
		public List<Role> GetList(string tableName, int pageIndex=1, int pageSize=12)
		{
			return this.Search(tableName).Page(pageIndex, pageSize).ToList();
		}
		/// <summary>
		/// 添加实体
		/// <param name="obj">传进的实体</param>
		/// </summary>
		public int Insert(Role obj)
		{
			return db.Insert(obj);
		}
		/// <summary>
		/// 更新实体
		/// <param name="obj">传进的实体</param>
		/// </summary>
		public int Update(Role obj)
		{
			return db.Update(obj);
		}
		/// <summary>
		/// 删除实体
		/// <param name="obj">传进的实体</param>
		/// </summary>
		public int Delete(Role obj)
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
		public int Deletes(List<Role> objs)
		{
			return db.Delete<Role>(objs);
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

