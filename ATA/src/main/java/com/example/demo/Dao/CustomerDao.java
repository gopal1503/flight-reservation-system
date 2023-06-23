package com.example.demo.Dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.provider.HibernateUtils;
import org.springframework.stereotype.Repository;

import com.example.demo.Bean.ReservationBean;
import com.example.demo.Bean.RouteBean;
import com.example.demo.Bean.VehicleBean;


import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;


@Repository
public class CustomerDao {
	@Autowired
	private SessionFactory sessionFactory;
	private Session session;
	private Transaction transaction;
	private Query q;
	
	public String bookVehicle(ReservationBean reservationBean ) {
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		session.save(reservationBean);
		transaction.commit();
		session.close();
		return "Booking SUCCESS";
	}
	public ReservationBean viewResevationById(int reservationID) {
		
		 ReservationBean elBean=new ReservationBean();
			session=sessionFactory.openSession();
			transaction=session.beginTransaction();
		Query<ReservationBean> q2=session.createQuery("from ReservationBean where reservationID=:reservationID");
		q2.setParameter("reservationID", reservationID);
		ArrayList<ReservationBean> all=(ArrayList<ReservationBean>) q2.getResultList();
		for(ReservationBean e1:all)
		{
			elBean=e1;
		}
		return elBean;
		}
	  

	public List<VehicleBean> viewVehicleByType(String type) {
	    try (Session session = sessionFactory.openSession()) {
	        CriteriaBuilder builder = session.getCriteriaBuilder();
	        CriteriaQuery<VehicleBean> criteriaQuery = builder.createQuery(VehicleBean.class);
	        Root<VehicleBean> root = criteriaQuery.from(VehicleBean.class);

	        criteriaQuery.where(builder.equal(root.get("type"), type));

	        List<VehicleBean> vehicles = session.createQuery(criteriaQuery).getResultList();
	        return vehicles;
	    }
	}
	public List<VehicleBean> viewVehicleBySeatingCapacity(String seatingapacity) {
	    try (Session session = sessionFactory.openSession()) {
	        CriteriaBuilder builder = session.getCriteriaBuilder();
	        CriteriaQuery<VehicleBean> criteriaQuery = builder.createQuery(VehicleBean.class);
	        Root<VehicleBean> root = criteriaQuery.from(VehicleBean.class);

	        criteriaQuery.where(builder.equal(root.get("seatingapacity"), seatingapacity));

	        List<VehicleBean> vehicles = session.createQuery(criteriaQuery).getResultList();
	        return vehicles;
	    }
	}
	   
	public ArrayList<RouteBean> viewRoute()
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		q=session.createQuery("from RouteBean");
		return (ArrayList<RouteBean>) q.list();
	}

	


}
