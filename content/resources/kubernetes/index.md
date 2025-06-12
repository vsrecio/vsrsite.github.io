---
title: "Kubernetes Total: De Cero a Héroe del Cloud Native"
type: "kubernetes"

date: 2025-06-09T14:15:00-04:00
draft: false
image: "/images/kubernetes.png"

# --- Parámetros para la barra lateral ---
instructor: "Victor S. Recio"
lectures: "15 Módulos (+100 Tópicos)"
duration: "80+ horas"
labs: "Sí, intensivos"
skill_level: "Básico a Experto"
language: "Español"
quiz: "Sí, por módulo"
certificate: "Sí, de Experto en Kubernetes"

# --- Temario Completo del Curso de Kubernetes ---
modules:
- title: "Fundamentos de Contenedores y Orquestación"
  topics:
  - "El problema: ¿Por qué necesitamos contenedores?"
  - "Introducción a Docker: Imágenes, Contenedores y Dockerfiles"
  - "Docker Networking y Almacenamiento Básico"
  - "El siguiente nivel: ¿Por qué necesitamos un orquestador?"
  - "Historia y filosofía de Kubernetes (K8s)"
- title: "Arquitectura y Componentes de Kubernetes"
  topics:
  - "Visión general: El Control Plane y los Nodos Worker"
  - "Componentes del Control Plane: API Server, etcd, Scheduler, Controller Manager"
  - "Componentes del Nodo: Kubelet, Kube-Proxy, Container Runtime (CRI)"
  - "El flujo de una petición: de `kubectl` a un Pod corriendo"
- title: "Primeros Pasos Prácticos con Kubernetes"
  topics:
  - "Instalando `kubectl`: tu navaja suiza para K8s"
  - "Creando un clúster local con `kind`"
  - "El modelo declarativo: Introducción a los manifiestos YAML"
  - "Comandos esenciales: `get`, `describe`, `apply`, `delete`, `logs`, `exec`"
  - "Namespaces para aislamiento lógico"
- title: "Gestión de Cargas de Trabajo (Workloads)"
  topics:
  - "Pods: La unidad atómica de K8s"
  - "ReplicaSets: Asegurando el número de réplicas"
  - "Deployments: Despliegues y actualizaciones sin caídas (Rolling Updates)"
  - "Estrategias de despliegue: Recreate, Blue/Green, Canary"
  - "StatefulSets: Para aplicaciones con estado (bases de datos, colas)"
  - "DaemonSets: Desplegando agentes en cada nodo"
  - "Jobs y CronJobs: Para tareas batch y programadas"
- title: "Configuración y Secretos"
  topics:
  - "ConfigMaps: Separando la configuración del código"
  - "Secrets: Manejo de información sensible"
  - "Entendiendo la (in)seguridad de los Secrets nativos"
  - "Inyectando ConfigMaps y Secrets en Pods (variables de entorno y volúmenes)"
- title: "Redes (Networking) en Kubernetes"
  topics:
  - "Modelo de red de K8s: IP-por-Pod"
  - "Services: Abstracción para comunicación entre Pods (ClusterIP, NodePort)"
  - "LoadBalancers: Exponiendo servicios al exterior"
  - "Ingress y los Ingress Controllers (NGINX, Traefik)"
  - "Network Policies: Firewall para Pods"
  - "Introducción a CNI (Container Network Interface): Calico y Flannel"
  - "DNS y Service Discovery dentro del clúster"
- title: "Almacenamiento Persistente con Open Source"
  topics:
  - "El problema del almacenamiento efímero"
  - "PersistentVolumes (PVs) y PersistentVolumeClaims (PVCs)"
  - "StorageClasses y provisionamiento dinámico"
  - "Drivers CSI (Container Storage Interface)"
  - "Solución Open Source 1: **Longhorn** para almacenamiento distribuido simple"
  - "Solución Open Source 2: **Ceph con Rook** para almacenamiento de nivel producción"
  - "Backup y Restore de volúmenes persistentes"
- title: "Permisos y Control de Acceso con RBAC"
  topics:
  - "Principios de autenticación y autorización en K8s"
  - "Usuarios vs. ServiceAccounts"
  - "Roles y ClusterRoles: Definiendo permisos"
  - "RoleBindings y ClusterRoleBindings: Asignando permisos"
  - "Caso práctico: Crear un usuario de solo lectura para un namespace"
  - "Caso práctico: Configurar un ServiceAccount con permisos limitados"
- title: "Seguridad de Clúster y Workloads"
  topics:
  - "Las 4C de la seguridad Cloud Native: Cloud, Cluster, Container, Code"
  - "Pod Security Standards (PSS) y Pod Security Admission (PSA)"
  - "Security Contexts para Pods y Contenedores"
  - "Análisis estático de manifiestos YAML con `kube-linter`"
- title: "Seguridad Avanzada con Herramientas Open Source"
  topics:
  - "Policy Enforcement con **Kyverno**: Mutating y Validating Webhooks"
  - "Runtime Security con **Falco**: Detección de comportamiento anómalo"
  - "Análisis de vulnerabilidades de imágenes con **Trivy**"
  - "Gestión de certificados TLS con **cert-manager**"
  - "Gestión de secretos segura con **HashiCorp Vault** y el inyector de Secrets"
- title: "Observabilidad y Monitoreo"
  topics:
  - "Métricas con **Prometheus**: Arquitectura y PromQL"
  - "Visualización con **Grafana**: Creando dashboards para K8s"
  - "Logging centralizado con el stack **Loki, Promtail y Grafana** (PLG)"
  - "Trazabilidad distribuida con **Jaeger** y OpenTelemetry"
  - "Alerting con Alertmanager"
- title: "Gestión Avanzada y GitOps"
  topics:
  - "Resource Requests y Limits: Gestión de recursos"
  - "Probes: Liveness, Readiness y Startup"
  - "Horizontal Pod Autoscaler (HPA)"
  - "Cluster Autoscaler"
  - "Filosofía GitOps: Git como única fuente de la verdad"
  - "CI/CD con **ArgoCD**: Despliegue continuo declarativo"
  - "Backup y migración de clústeres con **Velero**"
- title: "Extendiendo Kubernetes (Nivel Experto)"
  topics:
  - "Custom Resource Definitions (CRDs): Definiendo tus propios recursos"
  - "El patrón Operator: Automatización de aplicaciones complejas"
  - "Webhook Admission Controllers: Interceptando peticiones a la API"
  - "Escribiendo plugins para `kubectl`"
- title: "Desarrollo de Operadores con Golang"
  topics:
  - "Introducción a **Go** para desarrolladores de Kubernetes"
  - "El ecosistema: **Kubebuilder** vs. Operator SDK"
  - "Scaffolding de un nuevo proyecto con Kubebuilder"
  - "Definiendo la API (CRD) con structs de Go"
  - "Implementando el Controller y el **Reconcile Loop**"
  - "Caso práctico: Crear un operador simple desde cero"
  - "Testing, build y despliegue del operador en el clúster"
- title: "Proyecto Final - Orquestación de Extremo a Extremo"
  topics:
  - "Diseño de la arquitectura de una aplicación multi-servicio"
  - "Despliegue de la aplicación usando GitOps con ArgoCD"
  - "Implementación de almacenamiento persistente con Longhorn/Rook"
  - "Aseguramiento del clúster con Kyverno y Falco"
  - "Creación de un operador básico para gestionar un componente de la aplicación"
  - "Configuración de monitoreo y alertas con Prometheus y Grafana"
  - "Defensa del proyecto final"
---

## Descripción del Curso

Bienvenido al curso **Kubernetes Total**, el programa definitivo que te convertirá en un experto en orquestación de contenedores y el ecosistema Cloud Native. Este no es solo un curso; es una inmersión profunda en la tecnología que impulsa la nube moderna.

Partiendo de los fundamentos de Docker, construiremos un conocimiento sólido de la arquitectura de Kubernetes. Avanzaremos a través de la gestión de aplicaciones, redes y almacenamiento, enfocándonos en **soluciones open source robustas y listas para producción**. Te sumergirás en el mundo de la seguridad, aprendiendo a blindar tus clústeres con herramientas como **Kyverno, Falco y cert-manager**.

---