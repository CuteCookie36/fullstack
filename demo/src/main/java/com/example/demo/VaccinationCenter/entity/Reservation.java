package com.example.demo.VaccinationCenter.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Reservations")
public class Reservation {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    //////////////////
    @Column(name="First_Name")
    private String firstName;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    /////////////////////
    @Column(name="Last_Name")
    private String lastName;

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    ////////////////////////
    @Column(name="Mail")
    private String mail;

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }
    ////////////////////////////
    @Column(name="Date_RDV")
    private  LocalDate dateRDV;

    public LocalDate getDateRDV() {
        return dateRDV;
    }

    public void setDateRDV(LocalDate dateRDV) {
        this.dateRDV = dateRDV;
    }
    ////////////////////////////
    
    @ManyToOne
    @JsonIgnoreProperties({"reservation"})
    private VaccinationCenter vaccinationCenter;

    public VaccinationCenter getVaccinationCenter() {
        return vaccinationCenter;
    }

    public void setVaccinationCenter(VaccinationCenter vaccinationCenter) {
        this.vaccinationCenter = vaccinationCenter;
    }
    ////////////////////////////
    // private Integer vaccinationCenterId;

    // public Integer getVaccinationCenterId() {
    //     return vaccinationCenterId;
    // }

    // public void setVaccinationCenterId(Integer vaccinationCenterId) {
    //     this.vaccinationCenterId = vaccinationCenterId;
    // }


}
