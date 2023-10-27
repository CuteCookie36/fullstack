package com.example.demo.VaccinationCenter.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Vaccin_Center")
public class VaccinationCenter {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    /////////////////////////////
    @Column(name="name")
    private String name;

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    ////////////////////////////
    @Column(name="city")
    private String city;
    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }
    //////////////////////////////
    @Column(name="adress")
    private String adress;

    public String getAdress() {
        return adress;
    }
    public void setAdress(String adress) {
        this.adress = adress;
    }
    ///////////////////////////
    
    @OneToMany(mappedBy = "vaccinationCenter", cascade = {})
    private List<Reservation> reservations;

    public List<Reservation> getReservation() {
        return reservations;
    }
    public void setReservation(List<Reservation> reservations) {
        this.reservations = reservations;
    }



}
