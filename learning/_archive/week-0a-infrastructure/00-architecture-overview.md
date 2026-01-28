# Infrastructure for AI Product Engineers

> Phase 0a - Week 0: Understanding the Infrastructure Stack
>
> **Date:** 2026-01-25
> **Purpose:** Define what AI PEs need to know about infrastructure and why

---

## 1. 왜 AI Product Engineer가 인프라를 알아야 하는가?

### 1.1 AI Product Engineer 역할 정의

**AI Product Engineer는:**
- AI 기능을 제품에 통합하는 엔지니어
- 프롬프트 엔지니어링 + 소프트웨어 엔지니어링 결합
- "AI가 잘 작동하게 만드는" 것에 집중
- DevOps 팀과 협업하지만, 인프라 운영이 주 업무는 아님

**역할 경계:**
```
AI Product Engineer:
- AI Agent 개발 및 프롬프트 최적화
- AI 시스템 성능 모니터링 및 비용 최적화
- 로컬 개발 환경 → 프로덕션 배포
- AI 특화 메트릭 설계 (토큰 사용량, 응답 품질)

DevOps Engineer:
- 클러스터 관리 및 인프라 운영
- 네트워크 정책, 보안 정책 설계
- CI/CD 파이프라인 구축
- 시스템 전반의 SRE 업무
```

### 1.2 실제 Job Description 분석

**Flank - Product Engineer (AI) JD 분석:**

요구 능력:
- ✅ "Deploy and monitor AI systems in production"
- ✅ "Understand containerization and orchestration basics"
- ✅ "Work with observability tools to track LLM costs"
- ❌ "Manage Kubernetes clusters" (명시되지 않음)
- ❌ "Design infrastructure architecture" (명시되지 않음)

**시사점:**
- AI PE는 **자기가 만든 AI 시스템을 배포하고 모니터링**할 줄 알아야 함
- 인프라 전문가가 될 필요는 없지만, **기본 개념과 도구 사용법**은 필수
- 특히 **비용 모니터링, 성능 추적**은 AI 시스템의 핵심

### 1.3 실무 시나리오: 언제 인프라 지식이 필요한가?

**시나리오 1: "왜 이번 달 LLM 비용이 2배가 됐죠?"**
```
상황: CFO가 비용 급증 질문
필요 능력:
- Grafana에서 비용 대시보드 확인
- 어느 Agent/프롬프트가 토큰 과다 사용하는지 파악
- Loki에서 관련 로그 검색
→ 인프라 지식 없으면: "모르겠습니다"
→ 인프라 지식 있으면: "Code Critic Agent가 특정 프롬프트에서 10K 토큰 사용, 최적화 예정"
```

**시나리오 2: "고객이 응답이 너무 느리다고 합니다"**
```
상황: 특정 요청이 5초 이상 소요
필요 능력:
- Tempo에서 해당 요청의 분산 트레이스 확인
- 어느 단계에서 병목인지 파악 (LLM API? Vector DB? 프롬프트 처리?)
- 병목 지점 최적화
→ 인프라 지식 없으면: "LLM이 원래 느려요"
→ 인프라 지식 있으면: "Vector DB 검색이 3초 소요, 인덱싱 최적화 필요"
```

**시나리오 3: "새 Agent를 프로덕션에 배포해야 합니다"**
```
상황: 로컬에서 개발한 Agent를 실 서비스에 배포
필요 능력:
- Dockerfile 작성
- K8s Deployment YAML 작성
- 환경 변수 (API 키) Secret으로 관리
- Health check 설정
→ 인프라 지식 없으면: DevOps 팀에 의존 (병목)
→ 인프라 지식 있으면: 직접 배포 후 DevOps 팀 리뷰 요청
```

**시나리오 4: "프로덕션에서 에러율이 5%입니다"**
```
상황: 일부 요청이 실패
필요 능력:
- Loki에서 에러 로그 검색
- Tempo에서 실패한 요청 트레이스 분석
- K8s Pod 재시작 여부 확인 (kubectl logs)
→ 인프라 지식 없으면: 재현 불가능
→ 인프라 지식 있으면: "Rate limit 초과, Retry 로직 추가 필요"
```

### 1.4 결론: AI PE에게 인프라는 "도구"

인프라는 **목적이 아니라 수단**:
- 목적: AI 시스템을 효과적으로 개발하고 운영
- 수단: Docker, K8s, LGTM을 활용한 배포 및 모니터링

**학습 원칙:**
- ✅ "이걸 어떻게 쓰나요?" (사용법)
- ✅ "왜 이렇게 동작하나요?" (기본 원리)
- ❌ "어떻게 최적화하나요?" (DevOps 영역)
- ❌ "어떻게 운영하나요?" (SRE 영역)

---

## 2. 무엇을 알아야 하는가?

### 2.1 전체 스택 개요

```
┌─────────────────────────────────────────┐
│  Observability Layer                    │
│  - Grafana (시각화)                      │
│  - Loki (로그), Tempo (트레이스)         │
│  - Mimir (메트릭)                        │
└─────────────────────────────────────────┘
           ↑ OpenTelemetry (데이터 수집)
┌─────────────────────────────────────────┐
│  Orchestration Layer                    │
│  - Kubernetes (컨테이너 관리)            │
│  - Pod, Service, Deployment             │
│  - Volume, Secret                       │
└─────────────────────────────────────────┘
           ↑ 컨테이너 실행
┌─────────────────────────────────────────┐
│  Containerization Layer                 │
│  - Docker (환경 패키징)                  │
│  - Image, Container, Dockerfile         │
└─────────────────────────────────────────┘
           ↑ 앱 실행
┌─────────────────────────────────────────┐
│  Application Layer                      │
│  - AI Agent (Python + Claude API)       │
│  - LangGraph, Vector DB                 │
└─────────────────────────────────────────┘
```

### 2.2 학습 깊이: Level 1 (User) 정의

**Level 0: 모름**
- "Docker가 뭐죠?"
- "Kubernetes를 왜 써요?"

**Level 1: User (AI PE 목표)**
- "Dockerfile 읽고 수정 가능"
- "kubectl로 Pod 상태 확인하고 로그 볼 수 있음"
- "Grafana 대시보드 만들 수 있음"
- "내가 만든 AI Agent를 배포하고 모니터링 가능"

**Level 2: Advanced User**
- "멀티스테이지 Dockerfile 최적화"
- "K8s Helm 차트 작성"
- "PromQL 고급 쿼리"

**Level 3: Expert (DevOps/SRE)**
- "K8s 클러스터 운영"
- "네트워크 정책, Service Mesh 설계"
- "Observability 플랫폼 구축"

**AI PE는 Level 1을 목표로 합니다.**

### 2.3 기술별 학습 범위

| 기술 | 알아야 할 것 (Level 1) | 몰라도 되는 것 (Level 2+) |
|------|----------------------|------------------------|
| **Docker** | Dockerfile 읽기/쓰기<br>이미지 빌드/실행<br>docker-compose 사용 | 멀티스테이지 빌드 최적화<br>레지스트리 운영<br>보안 스캔 도구 |
| **Kubernetes** | Pod, Service, Deployment 개념<br>kubectl 기본 명령어<br>YAML 파일 읽고 수정<br>Secret, Volume 사용 | 클러스터 구성 (노드, CNI)<br>Helm, Kustomize<br>Service Mesh (Istio) |
| **Loki** | 로그 검색 (LogQL 기본)<br>Grafana에서 로그 조회 | LogQL 고급 쿼리<br>Loki 설정 최적화 |
| **Tempo** | 트레이스 확인<br>Span 개념 이해 | Sampling 전략<br>Tempo 백엔드 구성 |`
| **Mimir** | 메트릭 그래프 생성<br>PromQL 기본 쿼리 | PromQL 고급 함수<br>Mimir 운영 |
| **Grafana** | 대시보드 생성<br>패널 추가/수정<br>알림 설정 | 플러그인 개발<br>Grafana 권한 관리 |
| **OpenTelemetry** | Python 앱에 기본 계측<br>Span 생성, 로그 전송 | Collector 구성<br>커스텀 Exporter |

### 2.4 학습 우선순위

**필수 (Week 1-4):**
1. **Docker** - 로컬에서 AI Agent 컨테이너화
2. **Kubernetes 기초** - Pod, Service, Deployment 개념
3. **LGTM Stack 설치** - 로컬 환경 구축
4. **OpenTelemetry 기본** - 간단한 로그/트레이스 수집

**중요 (실습 중 학습):**
5. **Kubernetes Secret** - API 키 관리
6. **Kubernetes Volume** - 데이터 영속성
7. **Resource Limits** - CPU/메모리 제한
8. **Health Checks** - Liveness/Readiness Probe

**선택 (필요 시 학습):**
9. Ingress (외부 접근)
10. StatefulSet (DB 같은 상태 유지 앱)
11. HPA (자동 스케일링)

### 2.5 TypeScript 개발자를 위한 대응표

이미 알고 있는 웹 개발 개념과 대응시키면 학습이 빠릅니다:

| 알고 있는 것 (Web Dev) | 배울 것 (Infrastructure) | 유사점 |
|----------------------|------------------------|-------|
| `package.json` | `Dockerfile` | 의존성 정의 |
| `npm install` | `docker build` | 의존성 설치 |
| `npm start` | `docker run` | 앱 실행 |
| `node_modules/` | Docker Image | 의존성 포함된 패키지 |
| PM2 | Kubernetes | 프로세스 관리 |
| Nginx (로드 밸런서) | K8s Service | 트래픽 분산 |
| `.env` 파일 | K8s Secret | 환경 변수 관리 |
| `console.log` | Loki (로그) | 디버깅 정보 |
| Chrome DevTools | Tempo (트레이스) | 성능 프로파일링 |
| Google Analytics | Mimir (메트릭) | 사용량 추적 |
| Vercel Dashboard | Grafana | 통합 모니터링 |

---

## 3. Docker: 컨테이너화

### 3.1 정의

**Docker는 애플리케이션과 그 실행 환경을 하나의 패키지(Image)로 만들고, 격리된 환경(Container)에서 실행하는 플랫폼입니다.**

**핵심 문제 해결:**
- "내 컴퓨터에선 되는데요?" → 모든 환경에서 동일하게 작동
- 의존성 충돌 → 각 앱이 독립된 환경에서 실행
- 배포 복잡성 → 이미지 하나로 어디든 배포

### 3.2 핵심 개념

**Image (이미지)**
- 실행 파일 + 라이브러리 + 설정을 포함한 읽기 전용 템플릿
- 레이어 구조로 저장 (변경사항만 추가)
- 예: `python:3.11`, `my-agent:v1.0`

**Container (컨테이너)**
- Image로부터 생성된 실행 인스턴스
- 프로세스 레벨 격리 (다른 컨테이너/호스트와 독립)
- 여러 Container가 같은 Image 공유 가능

**Dockerfile**
- Image를 빌드하는 명령어 스크립트
- 각 명령어가 레이어 생성

### 3.3 작동 원리

```
[Dockerfile]
    ↓ docker build
[Image] (불변, 읽기 전용)
    ↓ docker run
[Container] (실행 중인 인스턴스)
```

**레이어 구조:**
```dockerfile
FROM python:3.11              # Layer 1: Base OS + Python
RUN pip install anthropic     # Layer 2: anthropic 라이브러리
COPY . /app                   # Layer 3: 앱 코드
```

코드만 변경하면 Layer 1-2는 재사용 (빌드 속도 향상)

### 3.4 AI PE가 알아야 할 것

**Dockerfile 작성:**
```dockerfile
# 1. Base Image 선택
FROM python:3.11-slim

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. 의존성 먼저 복사 (캐싱 활용)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 4. 앱 코드 복사
COPY src/ ./src/

# 5. 환경 변수 (기본값만, 실제 값은 runtime)
ENV PYTHONUNBUFFERED=1

# 6. 실행 명령
CMD ["python", "src/agents/prompt_reviewer.py"]
```

**기본 명령어:**
```bash
# 이미지 빌드
docker build -t my-agent:v1.0 .

# 컨테이너 실행
docker run -d \
  -e ANTHROPIC_API_KEY=$API_KEY \
  --name agent-1 \
  my-agent:v1.0

# 로그 확인
docker logs agent-1

# 실행 중인 컨테이너 목록
docker ps

# 컨테이너 중지/삭제
docker stop agent-1
docker rm agent-1

# 이미지 목록/삭제
docker images
docker rmi my-agent:v1.0
```

**docker-compose (여러 컨테이너 관리):**
```yaml
# docker-compose.yml
version: '3.8'
services:
  agent:
    build: .
    environment:
      - ANTHROPIC_API_KEY=${API_KEY}
    volumes:
      - ./data:/app/data

  vector-db:
    image: qdrant/qdrant
    ports:
      - "6333:6333"
```

```bash
# 모든 서비스 시작
docker-compose up -d

# 로그 확인
docker-compose logs -f agent

# 모든 서비스 중지
docker-compose down
```

### 3.5 AI PE 실전 패턴

**Pattern 1: 환경 변수로 Secret 주입**
```dockerfile
# ❌ 나쁜 예: API 키 하드코딩
ENV ANTHROPIC_API_KEY="sk-ant-xxx"  # 절대 금지!

# ✅ 좋은 예: runtime에 주입
# Dockerfile에는 없음

# 실행 시:
docker run -e ANTHROPIC_API_KEY=$API_KEY my-agent
```

**Pattern 2: Volume으로 데이터 영속화**
```bash
# 컨테이너 삭제해도 데이터 유지
docker run -v ./data:/app/data my-agent

# 로컬 ./data 디렉토리 ↔ 컨테이너 /app/data 동기화
```

**Pattern 3: Multi-container 개발 환경**
```yaml
# AI Agent + Vector DB + LGTM Stack
services:
  agent:
    build: .
  qdrant:
    image: qdrant/qdrant
  grafana:
    image: grafana/grafana
  loki:
    image: grafana/loki
```

### 3.6 웹 개발 비유 (참고)

익숙한 개념과 비교하면:
- `package.json` → `Dockerfile` (의존성 정의)
- `npm install` → `docker build` (의존성 설치)
- `node_modules/` → Docker Image (의존성 패키지)
- `npm start` → `docker run` (앱 실행)

---

## 4. Kubernetes: 컨테이너 오케스트레이션

### 4.1 정의

**Kubernetes(K8s)는 여러 서버(노드)에서 수백~수천 개의 컨테이너를 자동으로 배포, 스케일링, 관리하는 오케스트레이션 플랫폼입니다.**

**핵심 문제 해결:**
- 컨테이너 죽으면 자동 재시작
- 트래픽 증가 시 자동 스케일링
- 무중단 배포 (Rolling Update)
- 로드 밸런싱 자동 설정
- Secret, Config 중앙 관리

### 4.2 핵심 개념

**Pod**
- Kubernetes의 최소 배포 단위
- 1개 이상의 컨테이너 + 공유 스토리지/네트워크
- 항상 같은 노드에서 함께 실행
- IP 주소 할당

**Service**
- Pod들에 대한 네트워크 엔드포인트
- Pod IP는 변경되지만 Service IP는 고정
- 자동 로드 밸런싱 (여러 Pod로 트래픽 분산)

**Deployment**
- Pod의 "원하는 상태" 선언
- 자동 복구, 롤링 업데이트, 롤백
- Replica 수 관리

**Secret**
- 민감 정보 (API 키, 비밀번호) 저장
- Base64 인코딩
- Pod에 환경 변수 또는 파일로 주입

**Volume (PersistentVolumeClaim)**
- Pod 재시작해도 유지되는 데이터 저장소
- Vector DB 데이터, 학습 히스토리 등

### 4.3 작동 원리

**선언적(Declarative) 관리:**
```yaml
# deployment.yaml (원하는 상태 선언)
apiVersion: apps/v1
kind: Deployment
spec:
  replicas: 3  # "항상 3개 Pod가 실행 중이어야 함"

# Kubernetes Controller:
# 현재 상태: 2개 Pod 실행 중
# 원하는 상태: 3개 Pod
# → 액션: 1개 Pod 추가 생성
```

**Self-Healing:**
```
현재: Pod-1 ✅, Pod-2 ❌ (크래시), Pod-3 ✅

K8s Controller:
"원하는 상태: 3개인데 2개만 있네?"
→ Pod-2 재시작
→ 30초 내 복구
```

### 4.4 AI PE가 알아야 할 것

**Pod 정의:**
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: prompt-reviewer
  labels:
    app: prompt-reviewer
spec:
  containers:
  - name: agent
    image: prompt-reviewer:v1.0
    ports:
    - containerPort: 8000
    env:
    - name: ANTHROPIC_API_KEY
      valueFrom:
        secretKeyRef:
          name: api-keys
          key: anthropic-key
    resources:
      requests:
        memory: "256Mi"
        cpu: "250m"
      limits:
        memory: "512Mi"
        cpu: "500m"
```

**Deployment (실전에서는 Pod 대신 Deployment 사용):**
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: prompt-reviewer
spec:
  replicas: 3
  selector:
    matchLabels:
      app: prompt-reviewer
  template:
    metadata:
      labels:
        app: prompt-reviewer
    spec:
      containers:
      - name: agent
        image: prompt-reviewer:v1.0
        # ... (위 Pod spec 동일)
```

**Service (Pod들에 접근):**
```yaml
apiVersion: v1
kind: Service
metadata:
  name: prompt-reviewer-svc
spec:
  selector:
    app: prompt-reviewer  # 이 label 가진 Pod들로 트래픽 전달
  ports:
  - port: 80
    targetPort: 8000
  type: LoadBalancer  # 외부 접근 가능
```

**Secret (API 키 관리):**
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: api-keys
type: Opaque
stringData:
  anthropic-key: "sk-ant-xxx"  # 실제로는 별도 관리
```

```bash
# Secret 생성 (명령어 사용 추천)
kubectl create secret generic api-keys \
  --from-literal=anthropic-key=$ANTHROPIC_API_KEY
```

**Volume (데이터 영속화):**
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: vector-db-storage
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi

---
# Pod에서 사용
spec:
  containers:
  - name: qdrant
    image: qdrant/qdrant
    volumeMounts:
    - name: storage
      mountPath: /qdrant/storage
  volumes:
  - name: storage
    persistentVolumeClaim:
      claimName: vector-db-storage
```

### 4.5 기본 kubectl 명령어

```bash
# Pod 목록
kubectl get pods
kubectl get pods -l app=prompt-reviewer  # label 필터

# Pod 상세 정보
kubectl describe pod prompt-reviewer-xxx

# 로그 확인
kubectl logs prompt-reviewer-xxx
kubectl logs -f prompt-reviewer-xxx  # 실시간

# 배포
kubectl apply -f deployment.yaml

# 스케일링
kubectl scale deployment prompt-reviewer --replicas=5

# 롤링 업데이트
kubectl set image deployment/prompt-reviewer \
  agent=prompt-reviewer:v1.1

# 롤백
kubectl rollout undo deployment/prompt-reviewer

# Pod 내부 접속 (디버깅)
kubectl exec -it prompt-reviewer-xxx -- /bin/bash

# Service 목록
kubectl get services

# Secret 목록 (값은 안 보임)
kubectl get secrets

# 리소스 삭제
kubectl delete -f deployment.yaml
kubectl delete pod prompt-reviewer-xxx
```

### 4.6 AI PE 실전 패턴

**Pattern 1: Resource Limits (필수)**
```yaml
# LLM API 호출은 CPU/메모리 많이 씀
resources:
  requests:  # 최소 보장
    memory: "256Mi"
    cpu: "250m"
  limits:    # 최대 허용
    memory: "1Gi"
    cpu: "1000m"

# 이게 없으면:
# - 한 Pod가 노드 전체 메모리 사용 → 다른 Pod 죽음
# - 비용 폭발
```

**Pattern 2: Health Checks**
```yaml
spec:
  containers:
  - name: agent
    livenessProbe:   # "이 Pod 살아있나?"
      httpGet:
        path: /health
        port: 8000
      initialDelaySeconds: 30
      periodSeconds: 10

    readinessProbe:  # "이 Pod 트래픽 받을 준비됐나?"
      httpGet:
        path: /ready
        port: 8000
      initialDelaySeconds: 5
      periodSeconds: 5

# livenessProbe 실패 → Pod 재시작
# readinessProbe 실패 → Service에서 트래픽 안 보냄
```

**Pattern 3: ConfigMap (설정 분리)**
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: agent-config
data:
  model: "claude-3-sonnet-20240229"
  max_tokens: "4000"

---
# Pod에서 사용
env:
- name: CLAUDE_MODEL
  valueFrom:
    configMapKeyRef:
      name: agent-config
      key: model
```

**Pattern 4: Multi-Agent Deployment**
```yaml
# Prompt Reviewer
apiVersion: apps/v1
kind: Deployment
metadata:
  name: prompt-reviewer
spec:
  replicas: 2
  # ...

---
# Code Critic
apiVersion: apps/v1
kind: Deployment
metadata:
  name: code-critic
spec:
  replicas: 3
  # ...

---
# Service for each
apiVersion: v1
kind: Service
metadata:
  name: prompt-reviewer-svc
# ...
```

### 4.7 웹 개발 비유 (참고)

- PM2 → Kubernetes (프로세스 관리)
- `pm2 start app.js -i 4` → `replicas: 4`
- `pm2 restart` → `kubectl rollout restart`
- Nginx (로드 밸런서) → Kubernetes Service
- `.env` 파일 → Kubernetes Secret

---

## 5. LGTM Stack: Observability

### 5.1 정의

**LGTM Stack은 프로덕션 시스템을 "관찰 가능(Observable)"하게 만드는 통합 모니터링 도구입니다.**

- **L**oki: 로그 수집 및 검색
- **G**rafana: 시각화 대시보드
- **T**empo: 분산 트레이싱
- **M**imir: 메트릭 (시계열 데이터)

**핵심 문제 해결:**
- 프로덕션에서 무슨 일이 일어나는지 실시간 파악
- 에러 원인 빠르게 추적
- 성능 병목 지점 발견
- 비용 추세 모니터링

### 5.2 Observability의 3가지 신호

**Logs (로그) - "무엇이 일어났나?"**
- 이벤트 기록 (에러, 경고, 정보)
- 텍스트 기반, 자유 형식
- 예: "Claude API called with 2000 tokens"

**Traces (트레이스) - "어디서 시간이 걸렸나?"**
- 요청의 전체 흐름 추적
- 여러 서비스를 거치는 경로 시각화
- 예: "User Request → Agent A → Claude API → Agent B"

**Metrics (메트릭) - "얼마나 자주? 얼마나 많이?"**
- 시계열 숫자 데이터
- 그래프로 시각화
- 예: "시간당 API 호출 수, 평균 응답 시간"

### 5.3 각 구성 요소

**Loki (로그 저장 및 검색)**
```python
# Python 코드
import logging

logger.info("Claude API called", extra={
    "model": "claude-3-sonnet",
    "tokens": 2000,
    "cost": 0.02
})

# → Loki에 저장
# → Grafana에서 LogQL로 검색:
# {app="prompt-reviewer"} |= "error"
# {app="code-critic"} | json | cost > 0.10
```

**Tempo (분산 트레이싱)**
```python
# 요청이 여러 Agent를 거칠 때
User Request (trace_id: abc123)
├─ Prompt Reviewer (200ms)
│  └─ Vector DB Search (150ms)
├─ Claude API (2000ms)  ← 병목!
└─ Response Formatting (50ms)

# Tempo에서 trace_id로 전체 흐름 확인 가능
```

**Mimir (메트릭 저장)**
```python
# 시계열 데이터
claude_api_calls_total{agent="prompt_reviewer"} 1245
claude_api_cost_usd_total 45.30
response_time_seconds{quantile="0.95"} 1.2

# PromQL 쿼리:
# rate(claude_api_calls_total[5m])  # 5분당 호출 수
# sum by (agent) (claude_api_cost_usd_total)  # Agent별 비용
```

**Grafana (통합 대시보드)**
- Loki, Tempo, Mimir 데이터를 한 곳에서 시각화
- 패널(Panel) 생성: 그래프, 테이블, 로그 뷰
- 알림(Alert) 설정: 비용 $100 초과 시 Slack 알림

### 5.4 AI PE가 알아야 할 것

**LogQL 기본 (Loki 쿼리):**
```logql
# 기본 필터
{app="prompt-reviewer"}

# 텍스트 검색
{app="prompt-reviewer"} |= "error"

# JSON 파싱
{app="code-critic"} | json | cost > 0.10

# 시간 범위
{app="prompt-reviewer"}[5m]
```

**PromQL 기본 (Mimir 쿼리):**
```promql
# 현재 값
claude_api_calls_total

# 5분당 증가율
rate(claude_api_calls_total[5m])

# Agent별 합계
sum by (agent) (claude_api_cost_usd_total)

# 95th percentile 응답 시간
histogram_quantile(0.95,
  rate(response_time_seconds_bucket[5m]))
```

**Grafana 대시보드 생성:**
1. Data Source 연결 (Loki, Tempo, Mimir)
2. Dashboard 생성
3. Panel 추가 (Time Series, Logs, Stat)
4. 쿼리 작성
5. 시각화 설정 (축, 범례, 색상)
6. 알림 규칙 추가 (선택)

### 5.5 AI PE 실전 패턴

**Pattern 1: 비용 모니터링 대시보드**
```
┌─────────────────────────────────────┐
│ Panel 1: Total Cost (Stat)          │
│ Query: sum(claude_api_cost_usd)     │
│ → $45.30                            │
├─────────────────────────────────────┤
│ Panel 2: Cost by Agent (Pie Chart)  │
│ Query: sum by (agent)(cost)         │
│ → Prompt Reviewer: 40%              │
│ → Code Critic: 60%                  │
├─────────────────────────────────────┤
│ Panel 3: Cost Trend (Time Series)   │
│ Query: rate(cost[1h])               │
│ → 시간별 비용 그래프                 │
└─────────────────────────────────────┘

Alert: cost > 100 → Slack 알림
```

**Pattern 2: 에러 추적**
```logql
# Loki에서 에러 로그 검색
{app="prompt-reviewer"} |= "error" | json

# 특정 trace_id로 Tempo에서 전체 흐름 확인
# → 어느 단계에서 에러 발생했는지 파악
```

**Pattern 3: 성능 최적화**
```promql
# 느린 요청 찾기
histogram_quantile(0.95,
  response_time_bucket{agent="code-critic"})

# Tempo에서 느린 trace 분석
# → Claude API 호출이 2초 소요
# → 프롬프트 최적화 또는 캐싱 추가
```

### 5.6 웹 개발 비유 (참고)

- Chrome DevTools Console → Loki (로그)
- Performance Profiler → Tempo (트레이싱)
- Google Analytics → Mimir (메트릭)
- Vercel Dashboard → Grafana (통합 뷰)

---

## 6. OpenTelemetry: 계측

### 6.1 정의

**OpenTelemetry는 앱에서 Logs, Traces, Metrics를 수집하는 표준 라이브러리 및 프로토콜입니다.**

**핵심 문제 해결:**
- 수동으로 로그/메트릭 코드 작성 불필요
- 벤더 중립적 (Loki, Tempo, Mimir뿐 아니라 Datadog, New Relic 등도 지원)
- 자동 계측 (라이브러리 호출 자동 추적)

### 6.2 작동 원리

```
[Your App]
    ↓ OpenTelemetry SDK
[Telemetry Data] (Logs, Traces, Metrics)
    ↓ OpenTelemetry Exporter
[LGTM Stack] (Loki, Tempo, Mimir)
    ↓
[Grafana] (시각화)
```

**자동 계측 (Auto-Instrumentation):**
- HTTP 요청, DB 쿼리, 외부 API 호출 자동 추적
- 수동 코드 작성 최소화

**수동 계측 (Manual Instrumentation):**
- 비즈니스 로직 추적 (프롬프트 처리, Agent 협업)

### 6.3 AI PE가 알아야 할 것

**기본 설정 (Python):**
```python
from opentelemetry import trace, metrics
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.metrics import MeterProvider
from opentelemetry.exporter.otlp.proto.grpc.trace_exporter import OTLPSpanExporter
from opentelemetry.exporter.otlp.proto.grpc.metric_exporter import OTLPMetricExporter

# Trace 설정
trace.set_tracer_provider(TracerProvider())
tracer = trace.get_tracer(__name__)
span_exporter = OTLPSpanExporter(endpoint="http://tempo:4317")

# Metrics 설정
metrics.set_meter_provider(MeterProvider())
meter = metrics.get_meter(__name__)
metric_exporter = OTLPMetricExporter(endpoint="http://mimir:4317")
```

**Span 생성 (Trace):**
```python
def process_review(code):
    with tracer.start_as_current_span("process_review") as span:
        span.set_attribute("code_length", len(code))

        # Sub-span
        with tracer.start_as_current_span("call_claude"):
            response = claude_client.messages.create(...)
            span.set_attribute("tokens", response.usage.total_tokens)

        return response
```

**Metric 기록:**
```python
# Counter (증가만)
api_call_counter = meter.create_counter(
    "claude_api_calls_total",
    description="Total Claude API calls"
)
api_call_counter.add(1, {"agent": "prompt_reviewer"})

# Histogram (분포)
response_time_histogram = meter.create_histogram(
    "response_time_seconds",
    description="Response time distribution"
)
response_time_histogram.record(1.25, {"agent": "prompt_reviewer"})
```

**로그 연동:**
```python
import logging
from opentelemetry.instrumentation.logging import LoggingInstrumentor

# 자동으로 trace_id, span_id를 로그에 추가
LoggingInstrumentor().instrument()

logger.info("Claude API called", extra={
    "model": "claude-3-sonnet",
    "tokens": 2000
})
# → Loki에 저장 + trace_id 포함
```

### 6.4 자동 계측 예시

```python
# Anthropic 라이브러리 자동 계측 (가상 예시)
from opentelemetry.instrumentation.anthropic import AnthropicInstrumentor

AnthropicInstrumentor().instrument()

# 이제 모든 Claude API 호출이 자동으로:
# - Span 생성 (call_claude)
# - 토큰 수 기록
# - 응답 시간 측정
# - 비용 계산 (토큰 * 단가)

response = client.messages.create(...)  # 자동 추적됨
```

### 6.5 웹 개발 비유 (참고)

- Google Analytics `gtag.js` → OpenTelemetry SDK
- `track('event')` → `span.set_attribute()`
- 자동 페이지뷰 추적 → 자동 HTTP 요청 추적

---

## 7. Production Considerations

### 7.1 데이터 영속성 (Persistence)

**문제:**
- Pod 재시작하면 컨테이너 내 데이터 삭제
- Vector DB 데이터, 학습 히스토리 유지 필요

**해결: Kubernetes Volume**
```yaml
# PersistentVolumeClaim
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: qdrant-storage
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 20Gi

---
# Deployment에서 사용
spec:
  containers:
  - name: qdrant
    volumeMounts:
    - name: data
      mountPath: /qdrant/storage
  volumes:
  - name: data
    persistentVolumeClaim:
      claimName: qdrant-storage
```

**StatefulSet (DB 같은 상태 유지 앱):**
```yaml
# Deployment 대신 StatefulSet 사용
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: vector-db
spec:
  serviceName: "qdrant"
  replicas: 1
  volumeClaimTemplates:
  - metadata:
      name: data
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: 20Gi
```

### 7.2 리소스 관리 및 비용 최적화

**Resource Requests/Limits (필수):**
```yaml
resources:
  requests:  # 스케줄러가 보장할 최소 리소스
    memory: "256Mi"
    cpu: "250m"  # 0.25 CPU
  limits:    # 초과 불가능한 최대 리소스
    memory: "1Gi"
    cpu: "1000m"  # 1 CPU

# 효과:
# - Requests: 노드 선택 시 기준
# - Limits: 초과 시 Pod 재시작 (OOMKilled)
```

**Horizontal Pod Autoscaler (HPA):**
```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: prompt-reviewer-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: prompt-reviewer
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70  # CPU 70% 넘으면 스케일 업
```

**비용 모니터링 알림:**
```yaml
# Grafana Alert 예시
alert: HighAPICost
expr: sum(rate(claude_api_cost_usd[1h])) > 10
annotations:
  summary: "Hourly API cost exceeds $10"
  description: "Current rate: {{ $value | printf \"%.2f\" }}/hour"
```

### 7.3 실패 처리 (Resilience)

**LLM API는 불안정합니다:**
- Rate Limit (429 Too Many Requests)
- Timeout (30초 응답 없음)
- API 장애 (500 Internal Server Error)

**Retry with Exponential Backoff:**
```python
from tenacity import retry, stop_after_attempt, wait_exponential

@retry(
    stop=stop_after_attempt(3),
    wait=wait_exponential(multiplier=1, min=1, max=10)
)
def call_claude_api(prompt):
    try:
        response = claude_client.messages.create(...)
        return response
    except RateLimitError:
        # 1초 → 2초 → 4초 대기 후 재시도
        raise
```

**Circuit Breaker Pattern:**
```python
from circuitbreaker import circuit

@circuit(failure_threshold=5, recovery_timeout=60)
def call_vector_db(query):
    # 5번 연속 실패하면 60초간 호출 차단
    # → 시스템 부하 감소, 빠른 실패
    return vector_db.search(query)
```

**Kubernetes Liveness/Readiness Probe:**
```yaml
spec:
  containers:
  - name: agent
    livenessProbe:
      httpGet:
        path: /health
        port: 8000
      failureThreshold: 3  # 3번 실패하면 Pod 재시작

    readinessProbe:
      httpGet:
        path: /ready
        port: 8000
      periodSeconds: 5
      # 준비 안 되면 Service에서 트래픽 안 보냄
```

### 7.4 보안

**Secret 관리 (API 키):**
```bash
# 절대 금지
ENV ANTHROPIC_API_KEY="sk-ant-xxx"  # Git에 올리면 안 됨!

# 권장 방법
kubectl create secret generic api-keys \
  --from-literal=anthropic-key=$ANTHROPIC_API_KEY
```

```yaml
# Pod에서 사용
env:
- name: ANTHROPIC_API_KEY
  valueFrom:
    secretKeyRef:
      name: api-keys
      key: anthropic-key
```

**RBAC (Role-Based Access Control):**
```yaml
# AI PE는 자기 namespace만 접근
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: ai-agents
  name: agent-developer
rules:
- apiGroups: ["apps"]
  resources: ["deployments", "pods"]
  verbs: ["get", "list", "create", "update", "delete"]

# 클러스터 전체 접근은 불가
```

### 7.5 네트워킹

**Service Types:**
```yaml
# ClusterIP (기본) - 클러스터 내부에서만 접근
type: ClusterIP

# LoadBalancer - 외부 IP 할당 (프로덕션)
type: LoadBalancer

# NodePort - 노드 IP:Port로 접근 (테스트)
type: NodePort
```

**Ingress (외부 → 클러스터 진입점):**
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ai-agents-ingress
spec:
  rules:
  - host: api.mycompany.com
    http:
      paths:
      - path: /review
        pathType: Prefix
        backend:
          service:
            name: prompt-reviewer-svc
            port:
              number: 80
```

---

## 8. 전체 통합 시나리오

### 8.1 사용자 요청 → 응답 흐름

```
1. [External User]
   POST https://api.mycompany.com/review
   {"code": "def hello():..."}

2. [Ingress]
   외부 요청 받아서 prompt-reviewer-svc로 라우팅

3. [Service: prompt-reviewer-svc]
   3개 Pod 중 하나로 로드 밸런싱
   → Pod-2 선택

4. [Pod-2: Docker Container]
   OpenTelemetry Trace 시작 (trace_id: abc123)
   Span: "handle_review_request"

5. [Application Code]
   with tracer.start_span("validate_code"):
       validate(code)  # 50ms

   with tracer.start_span("call_claude"):
       # Anthropic Instrumentor가 자동 추적
       response = claude.messages.create(...)  # 2000ms
       # → Loki: "Claude API called, 2000 tokens"
       # → Mimir: claude_api_calls_total += 1
       # → Mimir: claude_api_cost_usd += 0.02

   with tracer.start_span("format_response"):
       result = format(response)  # 20ms

6. [OpenTelemetry → LGTM Stack]
   Tempo: Trace 저장 (total: 2070ms)
   Loki: 로그 3개 저장
   Mimir: 메트릭 업데이트

7. [Grafana Dashboard]
   실시간 업데이트:
   - Total Cost: $45.32 (+$0.02)
   - Avg Response Time: 950ms → 955ms
   - Requests/min: 12 → 13

8. [Kubernetes]
   Readiness Probe 성공: Pod-2 계속 트래픽 받음
   Liveness Probe 성공: Pod-2 정상 작동 중

9. [Response to User]
   {"score": 8, "suggestions": [...]}
```

### 8.2 Grafana에서 확인 가능한 정보

**Tempo (Trace View):**
```
Trace ID: abc123 (2070ms total)
├─ handle_review_request (2070ms)
   ├─ validate_code (50ms)
   ├─ call_claude (2000ms)  ← 병목
   │  ├─ api_call (1950ms)
   │  └─ response_parse (50ms)
   └─ format_response (20ms)

Attributes:
- code_length: 245
- model: claude-3-sonnet
- tokens: 2000
- cost: $0.02
```

**Loki (Logs):**
```logql
{app="prompt-reviewer", trace_id="abc123"}

[2026-01-25 10:15:30] INFO validate_code: Code validation passed
[2026-01-25 10:15:30] INFO call_claude: Claude API called (2000 tokens, $0.02)
[2026-01-25 10:15:32] INFO format_response: Response formatted
```

**Mimir (Metrics):**
```promql
# 시간별 API 호출 수
rate(claude_api_calls_total[5m])
# → 분당 13 calls

# 누적 비용
sum(claude_api_cost_usd_total)
# → $45.32

# 응답 시간 95th percentile
histogram_quantile(0.95, response_time_seconds_bucket)
# → 1.2초
```

---

## 9. 학습 로드맵

### Week 1: Docker Basics
**목표:** 컨테이너화 개념 이해 및 실습

**학습 내용:**
- [ ] Docker 설치
- [ ] 공식 튜토리얼 완료
- [ ] 간단한 Python 앱 Dockerfile 작성
- [ ] docker-compose로 multi-container 앱

**실습 위치:** `~/infra-labs/docker-basics/`
**학습 노트:** `learning/week-0a-infrastructure/01-docker-basics.md`

### Week 2: Kubernetes Basics
**목표:** K8s 기본 개념 및 kubectl 사용

**학습 내용:**
- [ ] minikube 설치
- [ ] Pod, Service, Deployment 실습
- [ ] kubectl 기본 명령어 연습
- [ ] Secret, Volume 사용법

**실습 위치:** `~/infra-labs/kubernetes-basics/`
**학습 노트:** `learning/week-0a-infrastructure/02-kubernetes-basics.md`

### Week 3-4: LGTM Stack
**목표:** 로컬 Observability 환경 구축

**학습 내용:**
- [ ] Docker Compose로 LGTM 스택 설치
- [ ] 샘플 Python 앱에 OpenTelemetry 통합
- [ ] Grafana 대시보드 생성
- [ ] Loki 로그 검색, Tempo 트레이스 확인

**실습 위치:** `~/infra-labs/lgtm-stack/`
**학습 노트:** `learning/week-0a-infrastructure/03-lgtm-stack.md`

### Success Criteria (Phase 0a 완료 기준)
- [ ] Dockerfile 읽고 수정 가능
- [ ] kubectl로 Pod 상태 확인 및 로그 조회 가능
- [ ] Grafana 대시보드 생성 가능
- [ ] LogQL, PromQL 기본 쿼리 작성 가능
- [ ] 로컬에서 LGTM 스택 + AI Agent 통합 환경 구축 완료

---

## 10. 핵심 명령어 치트시트

### Docker
```bash
# 이미지 빌드
docker build -t my-agent:v1.0 .

# 컨테이너 실행
docker run -d --name agent-1 -e API_KEY=$KEY my-agent:v1.0

# 로그/상태 확인
docker logs -f agent-1
docker ps

# 정리
docker stop agent-1 && docker rm agent-1
docker rmi my-agent:v1.0

# docker-compose
docker-compose up -d
docker-compose logs -f
docker-compose down
```

### Kubernetes
```bash
# 배포
kubectl apply -f deployment.yaml

# 조회
kubectl get pods
kubectl get services
kubectl get deployments

# 상세 정보
kubectl describe pod my-pod
kubectl logs my-pod
kubectl logs -f my-pod  # 실시간

# 스케일링
kubectl scale deployment my-app --replicas=5

# Secret 관리
kubectl create secret generic api-keys \
  --from-literal=key=$VALUE

# 삭제
kubectl delete -f deployment.yaml
kubectl delete pod my-pod
```

### LogQL (Loki)
```logql
# 기본 필터
{app="prompt-reviewer"}

# 텍스트 검색
{app="prompt-reviewer"} |= "error"

# JSON 파싱
{app="code-critic"} | json | cost > 0.10
```

### PromQL (Mimir)
```promql
# 현재 값
claude_api_calls_total

# 증가율
rate(claude_api_calls_total[5m])

# 집계
sum by (agent) (claude_api_cost_usd_total)

# Percentile
histogram_quantile(0.95, response_time_bucket)
```

---

## 11. 다음 단계

### 지금 바로 할 일

1. **환경 준비**
   ```bash
   # Docker Desktop 설치 여부 확인
   docker --version

   # 실습 디렉토리 생성
   mkdir -p ~/infra-labs/{docker-basics,kubernetes-basics,lgtm-stack}
   ```

2. **Week 1 시작**
   - Docker 공식 튜토리얼: https://docs.docker.com/get-started/
   - `learning/week-0a-infrastructure/01-docker-basics.md` 작성 시작

### 학습 원칙

- **개념 이해 → 실습 → 문서화**
- 모든 실습은 `~/infra-labs/`에서
- 모든 학습 노트는 `learning/week-0a-infrastructure/`에
- "Level 1 (User)"에 집중, DevOps 전문가 되려고 하지 말 것

---

## 12. 요약

### AI PE가 인프라를 알아야 하는 이유

1. **자율성:** DevOps 팀 의존 없이 직접 배포 가능
2. **비용 관리:** LLM API 비용 추적 및 최적화
3. **성능 최적화:** 병목 지점 파악 및 개선
4. **문제 해결:** 프로덕션 에러 신속 대응

### 알아야 할 것 (Level 1)

- **Docker:** Dockerfile 작성, 이미지 빌드/실행, docker-compose
- **Kubernetes:** Pod/Service/Deployment 개념, kubectl 기본 명령어, Secret/Volume 사용
- **LGTM:** Grafana 대시보드 생성, LogQL/PromQL 기본 쿼리
- **OpenTelemetry:** Python 앱에 기본 계측 추가

### 몰라도 되는 것 (Level 2+)

- Kubernetes 클러스터 운영
- Helm, Service Mesh
- PromQL 고급 쿼리, 커스텀 Exporter
- 인프라 아키텍처 설계

### 학습 로드맵

- **Week 1:** Docker
- **Week 2:** Kubernetes
- **Week 3-4:** LGTM Stack
- **Phase 1-5:** AI Agent 개발 + 프로덕션 배포

---

**Created:** 2026-01-25
**Last Updated:** 2026-01-25
**Status:** Architecture overview complete
**Next:** Week 1 - Docker hands-on practice (`01-docker-basics.md`)
