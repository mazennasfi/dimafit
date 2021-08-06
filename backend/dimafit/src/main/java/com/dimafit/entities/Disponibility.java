package com.dimafit.entities;

import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Disponibility{
	@Id
	@GeneratedValue
	private Long idDisponib;
	private LocalDateTime fromStart;
	private LocalDateTime toFinish;
	@ManyToOne
	@JoinColumn(name="ID_USER")
	private User user;
	public Disponibility() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Disponibility(LocalDateTime fromStart, LocalDateTime toFinish) {
		super();
		this.fromStart = fromStart;
		this.toFinish = toFinish;
	}
	public LocalDateTime getFromStart() {
		return fromStart;
	}
	public void setFromStart(LocalDateTime fromStart) {
		this.fromStart = fromStart;
	}
	public LocalDateTime getToFinish() {
		return toFinish;
	}
	public void setToFinish(LocalDateTime toFinish) {
		this.toFinish = toFinish;
	}

	
	

}