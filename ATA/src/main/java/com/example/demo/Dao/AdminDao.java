package com.example.demo.Dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.Bean.DriverBean;
import com.example.demo.Bean.ReservationBean;
import com.example.demo.Bean.RouteBean;
import com.example.demo.Bean.VehicleBean;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;







@Repository
public class AdminDao {
	@Autowired
	private SessionFactory sessionFactory;
	private Session session;
	private Transaction transaction;
	private Query q;
	
	public String addVehicle(VehicleBean vehicleBean ) {
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		session.save(vehicleBean);
		transaction.commit();
		session.close();
		return "SUCCESS";
	}
	public String deleteVehicle(int VehicleID){
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		Query q1=session.createQuery("delete from VehicleBean where VehicleID=:VehicleID");
		q1.setParameter("VehicleID",VehicleID);
		q1.executeUpdate();
        transaction.commit();
        return "SUCCESS";
	}
	public VehicleBean viewVehicleById(int VehicleID) {
	
		VehicleBean elBean=new VehicleBean();
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
	Query<VehicleBean> q2=session.createQuery("from VehicleBean where VehicleID=:VehicleID");
	q2.setParameter("VehicleID", VehicleID);
	ArrayList<VehicleBean> all=(ArrayList<VehicleBean>) q2.getResultList();
	for(VehicleBean e1:all)
	{
		elBean=e1;
	}
	return elBean;
	}

	public boolean modifyVehicle(VehicleBean vehicleBean) {
	    boolean isSuccess = true;
	    try {
	        Session session = sessionFactory.openSession();
	        Transaction transaction = session.beginTransaction();
	        session.update(vehicleBean);
	        transaction.commit();
	        session.close();
	    } catch (Exception e) {
	        isSuccess = false;
	        e.printStackTrace();
	    }
	    return isSuccess;
	}

	public String addDriver(DriverBean driverBean ) {
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		session.save(driverBean);
		transaction.commit();
		session.close();
		return "SUCCESS";
	}
	public String deleteDriver(int driverID){
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		Query q1=session.createQuery("delete from DriverBean where driverID=:driverID");
		q1.setParameter("driverID",driverID);
		q1.executeUpdate();
        transaction.commit();
        return "SUCCESS";
	}
	public boolean modifyDriver(DriverBean driverBean) {
	    boolean isSuccess = true;
	    try {
	        Session session = sessionFactory.openSession();
	        Transaction transaction = session.beginTransaction();
	        session.update(driverBean);
	        transaction.commit();
	        session.close();
	    } catch (Exception e) {
	        isSuccess = false;
	        e.printStackTrace();
	    }
	    return isSuccess;
	}
	public String addRoute(RouteBean routeBean ) {
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		session.save(routeBean);
		transaction.commit();
		session.close();
		return "SUCCESS";
	}
	public String deleteRoute(int routeID){
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		Query q1=session.createQuery("delete from RouteBean where routeID=:routeID");
		q1.setParameter("routeID",routeID);
		q1.executeUpdate();
        transaction.commit();
        return "SUCCESS";
	}
	public boolean modifyRoute(RouteBean routeBean) {
	    boolean isSuccess = true;
	    try {
	        Session session = sessionFactory.openSession();
	        Transaction transaction = session.beginTransaction();
	        session.update(routeBean);
	        transaction.commit();
	        session.close();
	    } catch (Exception e) {
	        isSuccess = false;
	        e.printStackTrace();
	    }
	    return isSuccess;
	}
	public List<ReservationBean> viewReservationByJourneyDetails(String journeyDate, String source, String destination) {
	    try (Session session = sessionFactory.openSession()) {
	        CriteriaBuilder builder = session.getCriteriaBuilder();
	        CriteriaQuery<ReservationBean> criteriaQuery = builder.createQuery(ReservationBean.class);
	        Root<ReservationBean> root = criteriaQuery.from(ReservationBean.class);

	        Predicate journeyDatePredicate = builder.equal(root.get("journeyDate"), journeyDate);
	        Predicate sourcePredicate = builder.equal(root.get("source"), source);
	        Predicate destinationPredicate = builder.equal(root.get("destination"), destination);

	        criteriaQuery.where(builder.and(journeyDatePredicate, sourcePredicate, destinationPredicate));

	        List<ReservationBean> reservations = session.createQuery(criteriaQuery).getResultList();
	        return reservations;
	    } catch (HibernateException e) {
	        e.printStackTrace();
	    }

	    return new ArrayList<ReservationBean>();
	}

}